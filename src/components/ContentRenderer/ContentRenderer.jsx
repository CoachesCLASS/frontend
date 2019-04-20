// MyApp.js
import React, { Component } from 'react';
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';
import {IconButton, Grid} from '@material-ui/core';
import FileViewer from 'react-file-viewer';
import { Document, Page } from 'react-pdf';

import file from '../../assets/Emotional Intelligence/01-Training Manual/Training Manual.docx';
const type = 'docx'

class ContentRenderer extends Component {

    state = {
        numPages: null,
        pageNumber: 1,
    }
     
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    decrementPage = () => {
        this.setState((prevState) => ({ 
            pageNumber: prevState.pageNumber === 1 ?  1 : prevState.pageNumber - 1
        }));
    }

    incrementPage = () => {
        this.setState((prevState) => ({ 
            pageNumber: prevState.pageNumber === this.state.numPages ?  this.state.numPages : prevState.pageNumber + 1
        }));
    }

    render() {
        if(type==='docx'){
            return (
                <FileViewer
                    fileType='docx'
                    filePath={file}
                />
            );
        }
        else if(type ==='pdf'){
            const { pageNumber, numPages } = this.state;
            return (
                <Grid container alignItems="center" justify="center">
                    <Grid item xs={1}>
                        <IconButton onClick={this.decrementPage}><ArrowBackIos/></IconButton>
                    </Grid>
                    <Grid item xs={10}>
                        <Document
                            file={file}
                            onLoadSuccess={this.onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={this.incrementPage}><ArrowForwardIos/></IconButton>
                    </Grid>
                    <p>Page {pageNumber} of {numPages}</p>
                </Grid>
            );
        }
    }
}

export default ContentRenderer;