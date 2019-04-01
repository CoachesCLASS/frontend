import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import sampleFile from "./test.pdf";
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';
import {IconButton, Grid} from '@material-ui/core';
 
class PDFRenderer extends Component {
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
    const { pageNumber, numPages } = this.state;
 
    return (
      <Grid container alignItems="center" justify="center">
        <Grid item xs={1}>
            <IconButton onClick={this.decrementPage}><ArrowBackIos/></IconButton>
        </Grid>
        <Grid item xs={10}>
            <Document
            file={sampleFile}
            onLoadSuccess={this.onDocumentLoadSuccess}
            >
            <Page pageNumber={pageNumber} />
            </Document>
        </Grid>
        <Grid item xs={1}>
            <IconButton onClick={this.incrementPage}><ArrowForwardIos/></IconButton>
        </Grid>
      </Grid>
    // <p>Page {pageNumber} of {numPages}</p>
    );
  }
}

export default PDFRenderer;