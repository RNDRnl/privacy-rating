import * as React from "react";
import {LabelObject, Section } from "../../state/Logic";
const styles = require("./ReportPDF.scss");
import { PDFViewer, PDFDownloadLink, Page, Text, View, Document, StyleSheet, Svg, Image, Path, G } from '@react-pdf/renderer';

// /////////
// Score Renderer
// /////////

const ranks = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const stylesPDF = StyleSheet.create({
    page: {
      flexDirection: 'column',
      //backgroundColor: '#F0F0F0'
    },
    pageRow: {
        flexDirection: 'row',
        backgroundColor: '#F0F0F0'
    },
    pageColumn: {
        flexDirection: 'column',
        //backgroundColor: '#F0F0F0'
    },
    section: {
      margin: 1,
      padding: 10,
      flexGrow: 1,
      backgroundColor: '#FFFFFF'
    },
    sectionZero: {
        margin: 0,
        padding: 0,
        flexGrow: 1,
        backgroundColor: '#FFFFFF'
    },
    sectionSmall: {
        margin: 1,
        padding: 10,
        //flexGrow: 1,
        width: '68vw',
        marginLeft: '30vw',
    },
    sectionFlex1: {
        margin: 0,
        paddingBottom: 5,
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    sectionFlex13: {
        margin: 0,
        paddingBottom: 5,
        flex: 1.3,
        backgroundColor: '#FFFFFF'
    },
    sectionFlex05: {
        margin: 0,
        paddingBottom: 5,
        flex: 0.5,
        backgroundColor: '#FFFFFF'
    },
    sectionFlex01: {
        margin: 0,
        paddingBottom: 5,
        flex: 0.1,
        backgroundColor: '#FFFFFF',
        textAlign: 'left'
    },
    image: {
        color: 'orange',
        backgroundColor: 'red',
        padding:20,
        width:20,
        height:20
    },
    alightRight: {
        textAlign: 'right'
    },
    selected: {
        backgroundColor: 'black',
        color: 'white'
    },
    colorA: { color: '#2EA952' },
    colorB: { color: '#7CD452' },
    colorC: { color: '#C0EA7D' },
    colorD: { color: '#FFEE42' },
    colorE: { color: '#EFAF48' },
    colorF: { color: '#EC6C01' },
    colorG: { color: '#E82613' },
    padding: { paddingTop: 10, paddingBottom: 10 },
    colorABg: { backgroundColor: '#2EA952' },
    colorBBg: { backgroundColor: '#7CD452' },
    colorCBg: { backgroundColor: '#C0EA7D' },
    colorDBg: { backgroundColor: '#FFEE42' },
    colorEBg: { backgroundColor: '#EFAF48' },
    colorFBg: { backgroundColor: '#EC6C01' },
    colorGBg: { backgroundColor: '#E82613' },
    bigType: {fontSize: 75},
    midType: {fontSize: 25},
    smallType: {fontSize: 16},
    tinyType: {fontSize: 9},
    border: { borderRadius: 3, textAlign: 'center', margin: 0, backgroundColor: '#F0F0F0', border: '1px solid #D0D0D0' },
    smallTypeUnderline: {fontSize: 9, padding: 5, fontWeight:'bold', textDecoration: 'underline'},
});

// const Emoticon = (score) => {
//     switch(score.score) {
//         case -1:
//             return (
//                 <Svg style={{ width: 20, height: 20 }} viewBox="0 0 37 37">
//                     <Path d="M18.2998 35.6C27.6886 35.6 35.2998 27.9888 35.2998 18.6C35.2998 9.21113 27.6886 1.59998 18.2998 1.59998C8.91096 1.59998 1.2998 9.21113 1.2998 18.6C1.2998 27.9888 8.91096 35.6 18.2998 35.6Z" fill="#E82613" stroke="#010101" stroke-width="2.2441" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//                     <Path d="M23.3992 15.0999C24.5992 15.0999 25.5992 14.0999 25.5992 12.8999C25.5992 11.6999 24.5992 10.7 23.3992 10.7C22.1992 10.7 21.1992 11.6999 21.1992 12.8999C21.1992 14.0999 22.1992 15.0999 23.3992 15.0999Z" fill="black"/>
//                     <Path d="M13.2 15.0999C14.4 15.0999 15.4 14.0999 15.4 12.8999C15.4 11.6999 14.4 10.7 13.2 10.7C12 10.7 11 11.6999 11 12.8999C11 14.0999 12 15.0999 13.2 15.0999Z" fill="black"/>
//                     <Path d="M25.9996 27.1C25.8996 26.9 24.3996 22.1 18.2996 22.1C12.2996 22.1 10.6996 26.9 10.5996 27.1" fill="#E82613"/>
//                     <Path d="M25.9996 27.1C25.8996 26.9 24.3996 22.1 18.2996 22.1C12.2996 22.1 10.6996 26.9 10.5996 27.1" stroke="#010101" stroke-width="2.2441" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//                 </Svg>                
//             );
//         case 0:
//             return (
//                 <Svg  style={{ width: 20, height: 20 }} viewBox="0 0 37 37">
//                     <Path d="M18.5996 36.1C27.9884 36.1 35.5996 28.4888 35.5996 19.1C35.5996 9.71113 27.9884 2.09998 18.5996 2.09998C9.21077 2.09998 1.59961 9.71113 1.59961 19.1C1.59961 28.4888 9.21077 36.1 18.5996 36.1Z" fill="#FFEE42" stroke="#010101" stroke-width="2.2441" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//                     <Path d="M23.7 15.5999C24.9 15.5999 25.9 14.5999 25.9 13.3999C25.9 12.1999 24.9 11.2 23.7 11.2C22.5 11.2 21.5 12.1999 21.5 13.3999C21.5 14.5999 22.5 15.5999 23.7 15.5999Z" fill="#010101"/>
//                     <Path d="M13.4998 15.5999C14.6998 15.5999 15.6998 14.5999 15.6998 13.3999C15.6998 12.1999 14.6998 11.2 13.4998 11.2C12.2998 11.2 11.2998 12.1999 11.2998 13.3999C11.2998 14.5999 12.2998 15.5999 13.4998 15.5999Z" fill="#010101"/>
//                     <Path d="M10.8994 23.8999C14.4994 23.8999 22.6994 23.8999 26.2994 23.8999H10.8994Z" fill="#FFEE42"/>
//                     <Path d="M10.8994 23.8999C14.4994 23.8999 22.6994 23.8999 26.2994 23.8999" stroke="#010101" stroke-width="2.2441" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//               </Svg>
//             );            
//         case 1:
//             return (
//                 <Svg style={{ width: 20, height: 20 }} viewBox="0 0 37 37">
//                     <Path d="M18.2998 35.7C27.6886 35.7 35.2998 28.0888 35.2998 18.7C35.2998 9.31111 27.6886 1.69995 18.2998 1.69995C8.91096 1.69995 1.2998 9.31111 1.2998 18.7C1.2998 28.0888 8.91096 35.7 18.2998 35.7Z" fill="#2EA952" stroke="#010101" stroke-width="2.2441" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//                     <Path d="M23.3992 15.2C24.5992 15.2 25.5992 14.1999 25.5992 12.9999C25.5992 11.7999 24.5992 10.7999 23.3992 10.7999C22.1992 10.7999 21.1992 11.7999 21.1992 12.9999C21.1992 14.1999 22.1992 15.2 23.3992 15.2Z" fill="#010101"/>
//                     <Path d="M13.2 15.2C14.4 15.2 15.4 14.1999 15.4 12.9999C15.4 11.7999 14.4 10.7999 13.2 10.7999C12 10.7999 11 11.7999 11 12.9999C11 14.1999 12 15.2 13.2 15.2Z" fill="#010101"/>
//                     <Path d="M10.5996 23.6C10.6996 23.8 12.1996 28.6 18.2996 28.6C24.2996 28.6 25.8996 23.8 25.9996 23.6" fill="#2EA952"/>
//                     <Path d="M10.5996 23.6C10.6996 23.8 12.1996 28.6 18.2996 28.6C24.2996 28.6 25.8996 23.8 25.9996 23.6" stroke="#010101" stroke-width="2.2441" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//                 </Svg>                
//             );
//         default:
//             return (
//                 null
//             )
//     }
// };

export default class ReportPDF { 
    rank;
    labelObject;
    labelHash;
    labelDomain;
    timeElapsed = Date.now();
    today = new Date(this.timeElapsed);



    getTag = () => {
        return (
            <Document title="Privacy Rating" author="PrivacyRating.info" pdfVersion="1.3">
            <Page size="A4" style={stylesPDF.page}>
 
                    <View style={stylesPDF.pageRow}>
                        <View style={[stylesPDF.section, stylesPDF[`color${this.labelObject.rank}`]]}>
                            <Text style={stylesPDF.midType}>Score {this.labelObject.rank}</Text>
                        </View>
                        <View style={stylesPDF.section}>
                            <Text style={stylesPDF.midType}>Privacy Rating Report</Text>
                        </View>
                    </View>

                    <View style={stylesPDF.pageRow}>
                        <View style={stylesPDF.section}>
                            <Text style={stylesPDF.smallType}>{this.labelObject.domain ? `Recommendations for ${this.labelObject.domain}` : '' }</Text>
                        </View>
                    </View>

                    <View  style={stylesPDF.pageRow}>
                        <View style={stylesPDF.section}>                                
                            <View style={stylesPDF.pageRow} >
                                <View style={stylesPDF.sectionFlex05}><Text style={stylesPDF.tinyType}>Rating category</Text></View>
                                <View style={stylesPDF.sectionFlex01}></View>
                                <View style={stylesPDF.sectionFlex01}><Text style={stylesPDF.tinyType}>Score</Text></View>
                                <View style={stylesPDF.sectionFlex1}><Text style={stylesPDF.tinyType}>What can I do in order to improve my score?</Text></View>                                       
                            </View>                             
                        </View>
                    </View>
               
                    { this.labelObject.categories.map( (it, index) => 
                        <View key={`${index}_row`} style={stylesPDF.pageRow}>
                            <View style={stylesPDF.section}>
                                <Text style={stylesPDF.smallType}>{it.categoryName}</Text>
                                { it.sections.map( (s, index_s) =>
                                    <View key={`${index_s}_row`} style={stylesPDF.pageRow} >
                                        <View style={stylesPDF.sectionFlex05}><Text style={stylesPDF.tinyType}>{s.text}</Text></View>
                                        <View style={stylesPDF.sectionFlex01}>
                                        {/* <Emoticon score={s.score} /> */}                                            
                                        </View>
                                        <View style={stylesPDF.sectionFlex01}><Text style={stylesPDF.tinyType}>{s.score}</Text></View>
                                        <View style={stylesPDF.sectionFlex1}><Text style={stylesPDF.tinyType}>{s.recommendation || "N.a."}</Text></View>
                                       
                                    </View>
                                )}
                            </View>
                        </View>
                    )}


                    <View style={stylesPDF.section}>
                        <View style={stylesPDF.pageRow}>
                            {/* <Text style={stylesPDF.sectionFlex1}></Text> */}
                            <Text style={stylesPDF.sectionFlex1}>Privacy rating score {this.labelObject.rank}</Text>
                            <Text style={[stylesPDF.sectionFlex1, stylesPDF.alightRight]}>{this.labelObject.score} { (this.labelObject.score == 1 || this.labelObject.score == -1) ? `Point` : `Points` }</Text>
                        </View>

                        <View style={stylesPDF.pageRow}>
                            <Text style={stylesPDF.sectionFlex1}></Text>
                        </View>

                        <View style={stylesPDF.sectionZero}>

                            <View style={stylesPDF.pageRow}>
                                {ranks.map((x, i) =>
                                    <View style={[     
                                        (x != 'A' && x != 'G') ? stylesPDF.sectionFlex1 : stylesPDF.sectionFlex13,
                                        stylesPDF.border,   
                                        stylesPDF.padding,          
                                        (x == this.rank) ? stylesPDF[`color${this.labelObject.rank}Bg`] : null,
                                        
                                    ]
                                        } key={i}>
                                        <Text style={stylesPDF.tinyType}>{x}</Text>
                                    </View>
                                )}    
                            </View>

                            <View style={stylesPDF.pageRow}>
                            {[...Array(23)].map((x, i) =>
                                <View key={i} style={[stylesPDF.sectionFlex01, stylesPDF.border, ((11-i) == this.labelObject.score) ? stylesPDF.selected : null]} >
                                    <Text style={[stylesPDF.tinyType]}>{11-i}</Text>
                                </View>
                            )}
                            </View>

                        </View>
                    </View>                   

                    <View style={stylesPDF.pageRow}>
                        <View style={stylesPDF.section}>
                            <Text style={stylesPDF.tinyType}>Generated {this.today.toDateString()} at {`${process.env.BASE_PATH}/#/embed/${this.labelHash}/${this.labelDomain}`}</Text>
                        </View>
                    </View>
            </Page>
        </Document>
        )
    }
    getChildren = () => {
        var result = new Array()
        return result
    }
    constructor(_labelObject:any, labelHash:any) { 
        this.labelObject = _labelObject
        this.rank = this.labelObject.rank
        this.labelHash = labelHash.hash
        this.labelDomain = labelHash.domain        
    }
}

