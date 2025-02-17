import React, {Component} from 'react';
import {FiFile, FiGlobe} from "react-icons/fi";
import cx from 'classnames';
import './index.css';
import {isHlsPlaylist, parseHlsManifest} from '../../util/HlsUtils';
import {mp4Info} from '../../util/Mp4Info';
import {isDashManifest, parseDashManifest} from "../../util/DashUtils";
import {isImage} from '../../util/ImageUtils';

class SourceSelector extends Component {

    constructor(props) {
        super(props);
        this.stopPropagation = this.stopPropagation.bind(this);
        this.urlInputKeyDown = this.urlInputKeyDown.bind(this);
        this.state = {
            source: this.props.defaultSource,
            metadata: null,
            showUrlInput: false,
            visible: this.props.visible
        };
    }

    setInputRef(inputRef) {
        this.input = inputRef;
    }

    async loadHlsMetadata(url) {
        const metadata = await parseHlsManifest(url);
        this.setState({metadata});
    }

    async loadDashMetadata(url) {
        const metadata = await parseDashManifest(url);
        this.setState({metadata})
    }

    async loadMp4Metadata(url) {
        try {
            const mp4Metadata = await mp4Info(url);

            const videoTrack = mp4Metadata.videoTracks[0];
            const metadata = {
                variants: [
                    {
                        bitrate: videoTrack.bitrate,
                        width: videoTrack.video.width,
                        height: videoTrack.video.height
                    }
                ]
            };
            this.setState({metadata})
        } catch(e) {
            console.log(`Failed to get mp4 info: ${e}`);
        }
    }

    componentDidMount() {
        this.changeSource(this.state.source);
        console.log('Source selector add event listeners');
        this.input.addEventListener('keydown', this.urlInputKeyDown);
        this.input.addEventListener('keypress', this.stopPropagation);
        this.input.addEventListener('keyup', this.stopPropagation);
    }

    componentWillUnmount() {
        this.input.removeEventListener('keydown', this.urlInputKeyDown);
        this.input.removeEventListener('keypress', this.stopPropagation);
        this.input.removeEventListener('keyup', this.stopPropagation);
    }

    stopPropagation(e) {
        e.stopPropagation();
    }

    urlInputKeyDown(e) {
        e.stopPropagation();
        switch (e.keyCode) {
            case 13:
                this.onUrlSelected(e.target.value);
                break;
            case 27:
                this.hideUrlInput();
                break;
            default:
        }
    }

    onBlur() {
        console.log('onBlur');
        this.setState({showUrlInput: false})
    }

    handleChange(evt) {
        if (evt.target.files) {
            this.props.onChange(evt.target.files[0])
        }
    }

    showUrlInput() {
        this.setState({showUrlInput: true});
    }

    hideUrlInput() {
        this.setState({showUrlInput: false});
    }

    onUrlSelected(url) {
        console.log(`url: ${url}`);
        this.hideUrlInput();
        let type = 'url';
        if (isHlsPlaylist(url)) {
            type = 'hls';
        } else if (isDashManifest(url)) {
            type = 'dash';
        } else if (isImage(url)) {
            type = 'image';
        }
        this.changeSource({
            type,
            name: url,
            url: url,
            variant: 0
        })
    }

    onFileSelected(evt) {
        if (evt.target.files && evt.target.files[0]) {
            const file = evt.target.files[0];
            const mediaType = file.type.startsWith('image/') ? 'image' : 'file';
            this.changeSource({
                type: mediaType,
                name: file.name,
                url: window.URL.createObjectURL(file),
            });
        }
    }

    onVariantSelected(evt) {
        const selectedVariant = parseInt(evt.target.value);
        this.setVariant(selectedVariant);
    }

    setVariant(selectedVariant) {
        const source = Object.assign({}, this.state.source, {variant: selectedVariant});
        this.setState({source});
        if (this.props.onVariantChange) {
            this.props.onVariantChange(selectedVariant);
        }
    }

    async loadMetadata(source) {
        if (source.type === 'hls') {
            await this.loadHlsMetadata(source.url)
        } else if (source.type === 'dash') {
            await this.loadDashMetadata(source.url);
        } else if (source.type === 'image') {
            // do nothing
        } else {
            await this.loadMp4Metadata(source.url);
        }
    }

    changeSource(source) {
        const prevSource = this.state.source;
        this.loadMetadata(source)
            .then(() => {
                this.setState({source});
                this.props.onChange(Object.assign({}, source));
                if (prevSource.type === 'file' && prevSource.url) {
                    window.URL.revokeObjectURL(prevSource.url);
                }
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.showUrlInput) {
            this.input.focus()
        }
    }

    currentUrl() {
        return this.state.source.type === 'file' ? '' : this.state.source.url;
    }

    formatMetadata(bitrate, width, height) {
        return `[${Math.round(bitrate / 1000)}kbit/s ${width}x${height}]`
    }

    renderSelectedSource() {
        if (this.state.showUrlInput) {
            return null;
        }
        const metadata = this.state.metadata;
        let metadataSpan = null;
        if (metadata) {
            if (metadata.variants.length > 1) {
                const options = metadata.variants.map( (variant, i) => {
                    return (<option
                        key={i}
                        value={i}
                        selected={i === this.state.source.variant}
                    >
                        {this.formatMetadata(variant.bandwidth,variant.width, variant.height)}
                    </option>);
                });
                metadataSpan = (<select value={this.state.selectedVariant} onChange={(e) => this.onVariantSelected(e)}>{options}</select>);
            } else if (metadata.variants.length === 1) {
                const variant = metadata.variants[0];
                metadataSpan = (<span>{this.formatMetadata(variant.bitrate, variant.width, variant.height)}</span>);
            }
        }
        return (<div className="source-metadata" onClick={() => this.showUrlInput()}>
            <div className="source-name" title={this.state.source.name}>{this.state.source.name}</div>
        </div>);
    }

    render() {
        return (
            <div className={cx("source-selector", this.props.className, {'hidden': !this.props.visible})}>
                <div className="source-buttons">
                    <label title="open local file" className="source-file-input" onClick={(evt) => {
                        this.hideUrlInput();
                        evt.stopPropagation()
                    }}>
                        <FiFile/>
                        <input type="file" onChange={(evt) => this.onFileSelected(evt) }/>
                    </label>
                </div>

                <input className={cx('url-input',
                    {hidden: !this.state.showUrlInput})}
                       type="text"
                       ref={(ref) => this.setInputRef(ref)}
                       onBlur={() => this.onBlur()}
                       defaultValue={this.currentUrl()}
                />

                {this.renderSelectedSource()}

            </div>
        )
    }
}

export default SourceSelector;
