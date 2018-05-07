require('dotenv').config();
import React, {Component} from 'react';
import {render} from 'react-dom';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      images: []
    };
    this.handleOnDrop = this.handleOnDrop.bind(this);
  }

  handleOnDrop(files) {
    this.setState({isUploading: true});

    Promise.all(files.map(file => this.uploadImage(file)))
      .then(images => {
        this.setState({
          isUploading: false,
          images: this.state.images.concat(images)
        });
      }).catch(e => console.log(e));
  }

  uploadImage(file) {
    return axios.get('/upload', {
      params: {
        filename: file.name,
        filetype: file.type
      }
    }).then(res => {
      const options = {
        headers: {
          'Content-Type': file.type
        }
      };
      return axios.put(res.data.url, file, options);
    }).then(res => {
      const {name} = res.config.data;
      return {
        name,
        isUploading: true,
        url: `https://[バケット名を入れてください].s3.amazonaws.com/${file.name}`
      };
    });
  }

  render() {
    return (
      <div style={{width: 960, margin: '20px auto'}}>
        <h1>React S3 Image Uploader Sample</h1>
        <Dropzone onDrop={this.handleOnDrop} accept="image/*">
          <div>画像をドラックまたはクリック</div>
        </Dropzone>
        {this.state.isUploading ?
          <div>ファイルをアップロードしています</div> :
          <div>ここに画像をドラックまたはクリック</div>}
        {this.state.images.length > 0 &&
          <div style={{margin: 30}}>
            {this.state.images.map(({name, url}) =>
              <img key={name} src={url} style={{width: 200, height: 200}}/>)}
          </div>}
      </div>
    );
  }
}

export default ImageUploader
