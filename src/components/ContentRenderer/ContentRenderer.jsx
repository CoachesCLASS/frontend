import React, { Component } from 'react';
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';
import {IconButton, Grid} from '@material-ui/core';
import FileViewer from 'react-file-viewer';
import { Document, Page } from 'react-pdf';

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
        const file = require(`../../assets/${this.props.filePath}`)
        const fileType = this.props.filePath.substring(this.props.filePath.lastIndexOf(".") + 1)
        console.log(fileType)

        if (fileType === "doc") {
            return (<p>File format not supported</p>)
        }
        else if (fileType === 'docx'){
            return (
                <FileViewer
                    fileType="docx"
                    filePath={file}
                />
            );
        }
        else if(fileType ==='pdf'){
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
