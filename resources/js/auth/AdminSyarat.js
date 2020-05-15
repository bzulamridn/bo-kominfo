import React from 'react';
import ReactDOM from 'react-dom';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';
import { css } from "@emotion/core";
import { ToastContainer, toast } from 'react-toastify';
import { BounceLoader, PacmanLoader } from "react-spinners";
import { Router, Link, browserHistory } from 'react-router';
import axios from 'axios';
// Include special components if required.
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
// import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
// import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';
const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;

export default class MyEditor extends React.Component {
    constructor() {
        super();

        this.handleModelChange = this.handleModelChange.bind(this);

        this.state = {
            isLoading: true,
            model: 'Example text'
        };
    }

    componentDidMount() {
       this.syarat()
    }

    syarat(){
        axios.get('/api/syarat')
        .then(res => {
            this.setState({
                isLoading: false,
                model: res.data.data.syarat
            })
            console.log(res.data.data)
        })
    }

    handleModelChange(model) {
        this.setState({
            model: model
        });
    }

    simpan () {
        this.setState({
            isLoading:true
        })
        console.log(this.state.model)
        axios.post('/api/simpansyarat/',{
            syarat : this.state.model
        })
        .then(res => {
            toast.success("Syarat dan Ketentuan berhasil Disimpan", {
                position: toast.POSITION.TOP_RIGHT
            });
        })
        this.syarat()
    }

    config = {
        iframe: true,
        pluginsEnabled: ['align', 'charCounter', 'codeBeautifier', 'codeView', 'colors', 'draggable', 'embedly', 'emoticons', 'entities', 'file', 'fontFamily', 'fontSize', 'fullscreen', 'image', 'imageManager', 'inlineStyle', 'lineBreaker', 'link', 'lists', 'paragraphFormat', 'paragraphStyle', 'quickInsert', 'quote', 'save', 'table', 'url', 'video', 'wordPaste'],
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'check', '|', 'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
       // toolbarButtonsMD: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'check', '|', 'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
        // toolbarButtonsSM: ['bold', 'italic', 'underline', 'strikeThrough', '|', 'fontFamily', 'fontSize', 'color', '|', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'check', '|', 'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
        // toolbarButtonsXS: ['bold', 'italic', 'underline', '|', 'fontFamily', 'fontSize', 'color', '|', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'check', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'insertHR', 'selectAll', 'clearFormatting', '|', 'spellChecker', '|', 'undo', 'redo'],
      };

    //onChange = editorState => this.setState({ editorState });
    render() {
        const { isLoading } = this.state
        return (
            <div>
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Syarat dan Ketentuan</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                <li className="breadcrumb-item active">Syarat dan Ketentuan</li>
                            </ol>
                        </div>
                    </div>
                </div>

                {isLoading ?
                    (<div className="sweet-loading" style={{ justifyContent: 'center', alignItems: 'center', marginTop: 300 }}>
                        <PacmanLoader
                            css={override}
                            size={40}
                            //size={"150px"} this also works
                            color={"#123abc"}
                        />
                    </div>)
                    :
                    (<div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <FroalaEditor
                                            model={this.state.model}
                                            onModelChange={this.handleModelChange}
                                            config ={this.config}
                                        />
                                    </div>
                                    <div className="row" style={{ marginTop:30 }}>
                                        <div className="col-lg-6">
                                            <button className="btn btn-danger btn-block">Reset</button>
                                        </div>
                                        <div className="col-lg-6">
                                            <button className="btn btn-info btn-block" onClick={() => this.simpan()}>Simpan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)


                }


            </div>
        );
    }
}

const styles = {
    editor: {
        border: '1px solid gray',
        borderRadius: 2,
        minHeight: '6em'
    }
};