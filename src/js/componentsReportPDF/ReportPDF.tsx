import * as React from "react";
import {LabelObject, Section } from "../../state/Logic";
const styles = require("./ReportPDF.scss");
import classnames from "classnames";
import { PDFViewer, PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// /////////
// Score Renderer
// /////////

const ranks = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const stylesPDF = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4'
    },
    pageRow: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 1,
      padding: 10,
      flexGrow: 1,
      backgroundColor: '#B0B0B0'
    },
    bigType: {fontSize: 150},
    midType: {fontSize: 60},
    smallType: {fontSize: 20},
    smallTypeUnderline: {fontSize: 20, textDecoration: 'underline'},
});

export default class ReportPDF { 
    rank;
    labelObject;

    timeElapsed = Date.now();
    today = new Date(this.timeElapsed);



    getTag = () => {
        return (
            <Document title="Privacy Rating" author="PrivacyRating.info" pdfVersion="1.3">
            <Page size="A4" style={stylesPDF.page}>
                <View style={stylesPDF.section}>
                    <Text style={stylesPDF.bigType}>Privacy Rating Report</Text>
                </View>
                <View style={stylesPDF.pageRow}>
                    <View style={stylesPDF.section}>
                        <Text style={stylesPDF.midType}>Score {this.labelObject.rank}</Text>
                        <Text style={stylesPDF.smallType}>Generated {this.today.toDateString()}</Text>
                    </View>
                    <View style={stylesPDF.section}>
                        <Text style={stylesPDF.smallType}></Text>
                        <Text style={stylesPDF.smallType}>https://www.privacyrating.info/</Text>
                    </View>
                </View>
            </Page>
            <Page size="A4" style={stylesPDF.page}>
               
                    { this.labelObject.categories.map( (it, index) => 
                        <View key={`${index}_row`} style={stylesPDF.pageRow}>
                            <View style={stylesPDF.section}>
                                <Text style={stylesPDF.midType}>{it.categoryName}</Text>
                                { it.sections.map( (s, index_s) =>
                                    <View key={`${index_s}_row`}>
                                        <Text style={stylesPDF.smallTypeUnderline}>{s.text}</Text>
                                        <Text style={stylesPDF.smallType}>{s.recommendation}</Text>
                                    </View>
                                )}
                            </View>
                        </View>
                    )}
                

            </Page>
        </Document>
        )
    }
    getChildren = () => {
        var result = new Array()
        return result
    }
    constructor(_labelObject) { 
        this.labelObject = _labelObject
        this.rank = this.labelObject.rank
        console.log(this.labelObject)
    
    }
}

