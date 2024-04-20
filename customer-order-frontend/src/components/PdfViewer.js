import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 20,
    },
    heading: {
        fontSize: 16,
        marginBottom: 10,
    },
    orderText: {
        fontSize: 12,
        marginBottom: 5,
    },
});

const PdfViewer = ({ orders }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    
    console.log(orders)
    
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    
    const handlePrevPage = () => {
        setPageNumber(pageNumber - 1);
    };
    
    const handleNextPage = () => {
        setPageNumber(pageNumber + 1);
    };
    
    return (
        <div>
            <PDFViewer
                style={{
                    width: '100%',
                    height: '80vh',
                }}
            >
                <Document>
                    {Object.entries(orders).map(([customerName, customerOrders]) => (
                        <Page style={styles.page} key={customerName}>
                            <Text style={styles.heading}>Customer Name: {customerName}</Text>
                            <Text style={styles.heading}>Order Items:</Text>
                            {customerOrders.map((order, orderIndex) => (
                                <View key={orderIndex}>
                                    <Text style={styles.orderText}>Order Date: {order.order_date}</Text>
                                    {order.items.map((item, itemIndex) => (
                                        <Text style={styles.orderText} key={itemIndex}>
                                            {item.product_name} - Qty: {item.quantity}, Price: ${item.price_per_unit}
                                        </Text>
                                    ))}
                                </View>
                            ))}
                        </Page>
                    ))}
                </Document>
            </PDFViewer>
        </div>
    );
};

export default PdfViewer;
