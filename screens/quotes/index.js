import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import WebSocketService from '../../services/WebSocketService';

const QuotesScreen = () => {
    
    // const { send, isConnected } = WebSocketService();
    // const [isLoading, setIsLoading] = useState(true);
  
    // useEffect(() => {
    //   // Send a message when the component mounts
    //   send('Hello from HomeScreen');
  
    //   // Simulate some loading time
    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, 2000);
  
    //   return () => {
    //     // Cleanup on component unmount
    //   };
    // }, [send]);

    const quotesData = [
        { pair: 'EUR/USD', bid: 1.1802, ask: 1.1804, change: -0.0012 },
        { pair: 'GBP/USD', bid: 1.3805, ask: 1.3807, change: 0.0002 },
        { pair: 'USD/JPY', bid: 109.853, ask: 109.877, change: 0.002 },
        { pair: 'EUR/USD', bid: 1.1802, ask: 1.1804, change: -0.0012 },
        { pair: 'GBP/USD', bid: 1.3805, ask: 1.3807, change: 0.0002 },
        { pair: 'USD/JPY', bid: 109.853, ask: 109.877, change: 0.002 },
        { pair: 'EUR/USD', bid: 1.1802, ask: 1.1804, change: -0.0012 },
        { pair: 'GBP/USD', bid: 1.3805, ask: 1.3807, change: 0.0002 },
        { pair: 'USD/JPY', bid: 109.853, ask: 109.877, change: 0.002 },
        { pair: 'EUR/USD', bid: 1.1802, ask: 1.1804, change: -0.0012 },
        { pair: 'GBP/USD', bid: 1.3805, ask: 1.3807, change: 0.0002 },
        { pair: 'USD/JPY', bid: 109.853, ask: 109.877, change: 0.002 },
        { pair: 'EUR/USD', bid: 1.1802, ask: 1.1804, change: -0.0012 },
        { pair: 'GBP/USD', bid: 1.3805, ask: 1.3807, change: 0.0002 },
        { pair: 'USD/JPY', bid: 109.853, ask: 109.877, change: 0.002 },
        { pair: 'EUR/USD', bid: 1.1802, ask: 1.1804, change: -0.0012 },
        { pair: 'GBP/USD', bid: 1.3805, ask: 1.3807, change: 0.0002 },
        { pair: 'USD/JPY', bid: 109.853, ask: 109.877, change: 0.002 },
        { pair: 'EUR/USD', bid: 1.1802, ask: 1.1804, change: -0.0012 },
        { pair: 'GBP/USD', bid: 1.3805, ask: 1.3807, change: 0.0002 },
        { pair: 'USD/JPY', bid: 109.853, ask: 109.877, change: 0.002 },
        { pair: 'EUR/USD', bid: 1.1802, ask: 1.1804, change: -0.0012 },
        { pair: 'GBP/USD', bid: 1.3805, ask: 1.3807, change: 0.0002 },
        { pair: 'USD/JPY', bid: 109.853, ask: 109.877, change: 0.002 },
        { pair: 'EUR/USD', bid: 1.1802, ask: 1.1804, change: -0.0012 },
        { pair: 'GBP/USD', bid: 1.3805, ask: 1.3807, change: 0.0002 },
        { pair: 'USD/JPY', bid: 109.853, ask: 109.877, change: 0.002 },
        { pair: 'EUR/USD', bid: 1.1802, ask: 1.1804, change: -0.0012 },
        { pair: 'GBP/USD', bid: 1.3805, ask: 1.3807, change: 0.0002 },
        { pair: 'USD/JPY', bid: 109.853, ask: 109.877, change: 0.002 },
        { pair: 'EUR/USD', bid: 1.1802, ask: 1.1804, change: -0.0012 },
        { pair: 'GBP/USD', bid: 1.3805, ask: 1.3807, change: 0.0002 },
        { pair: 'USD/JPY', bid: 109.853, ask: 109.877, change: 0.002 },
        { pair: 'EUR/USD', bid: 1.1802, ask: 1.1804, change: -0.0012 },
        { pair: 'GBP/USD', bid: 1.3805, ask: 1.3807, change: 0.0002 },
        { pair: 'USD/JPY', bid: 109.853, ask: 109.877, change: 0.002 },
        { pair: 'EUR/USD', bid: 1.1802, ask: 1.1804, change: -0.0012 },
        { pair: 'GBP/USD', bid: 1.3805, ask: 1.3807, change: 0.0002 },
        { pair: 'USD/JPY', bid: 109.853, ask: 109.877, change: 0.002 },
        // Add more dummy data here
    ];

    const redColor = '#FF5252';
    const blueColor = '#448AFF';
    const grayColor = '#757575';

    const renderQuoteItem = ({ item }) => {
        let color;
        if (item.change > 0) {
            color = redColor;
        } else if (item.change < 0) {
            color = blueColor;
        } else {
            color = grayColor;
        }

        const bid = item.bid.toString(); // Convert bid price to string
        const ask = item.ask.toString(); // Convert ask price to string

        return (
            <TouchableOpacity style={styles.quoteItem} onPress={() => handleRowPress(item)}>
                <Text style={styles.pair}>{item.pair}</Text>
                <View style={styles.ratesContainer}>
                    <View style={styles.rateItem}>
                        <Text style={[styles.rateValue, { color }]}>
                            {bid.slice(0, -3)}
                        </Text>
                    </View>
                    <View style={styles.rateItem}>
                        <Text style={[styles.rateValue, styles.biggerPrice, { color }]}>
                            {bid.slice(-3, -1)}
                        </Text>
                    </View>
                    <View style={styles.rateItem}>
                        <Text style={[styles.rateValue, styles.exponentialPrice, { color }]}>
                            {bid.slice(-1)}
                        </Text>
                    </View>
                </View>
                <View style={styles.ratesContainer}>
                    <View style={styles.rateItem}>
                        <Text style={[styles.rateValue, { color }]}>
                            {ask.slice(0, -3)}
                        </Text>
                    </View>
                    <View style={styles.rateItem}>
                        <Text style={[styles.rateValue, styles.biggerPrice, { color }]}>
                            {ask.slice(-3, -1)}
                        </Text>
                    </View>
                    <View style={styles.rateItem}>
                        <Text style={[styles.rateValue, styles.exponentialPrice, { color }]}>
                            {ask.slice(-1)}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const handleRowPress = (item) => {
        // Handle row press event here
        console.log('Row pressed:', item.pair);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.headerText, { flex: 180 }]}>Symbol</Text>
                <Text style={[styles.headerText, { flex: 60 }]}>Bid</Text>
                <Text style={[styles.headerText, { flex: 40 }]}>Ask</Text>
            </View>
            <FlatList
                data={quotesData}
                renderItem={renderQuoteItem}
                keyExtractor={(item) => item.pair}
                showsVerticalScrollIndicator={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 4,
        borderBottomWidth: 0.5,
        borderBottomColor: '#CCCCCC',
        backgroundColor: '#F5F5F5',
    },
    headerText: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Bebas Neue',
        fontWeight: 'bold',
    },
    quoteItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#CCCCCC',
    },
    pair: {
        flex: 1,
        fontSize: 22,
        color: '#000000',
        fontFamily: 'Bebas Neue',
    },
    ratesContainer: {
        flexDirection: 'row',
        marginLeft: 20,
    },
    rateItem: {
        marginLeft: 0,
    },
    rateLabel: {
        fontSize: 26,
        color: '#000000',
    },
    rateValue: {
        fontSize: 24,
        flexDirection: 'row',
        alignItems: 'flex-start',
        fontFamily: 'Bebas Neue',
    },
    biggerPrice: {
        fontSize: 30,
        marginTop: -5,
    },
    exponentialPrice: {
        fontSize: 16,
        marginTop: -8,
    },
});

export default QuotesScreen;
