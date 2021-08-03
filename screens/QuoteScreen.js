import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


function useQuote() {
  const[quote, setQuote] = React.useState(null)

  React.useEffect(() => {
    updateQuote()
  }, [])

  function updateQuote() {
    fetch("https://run-quotes-api.herokuapp.com/quotes")
      .then((response) => response.json())
      .then((quotes) => {
        const randomIndex = Math.floor(Math.random() * (quotes.length))
        setQuote(quotes[randomIndex])
      })
  }

  return {quote, updateQuote}
}

export default function QuoteScreen({navigation}) {
  const {quote, updateQuote} = useQuote()
    
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Mindful Quote Generator</Text>
      
      {quote && (
        <React.Fragment>
          <TouchableOpacity onPress={updateQuote}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Press For Inspiration</Text> 
            </View>
          </TouchableOpacity>

          <View style={styles.quoteContainer}>
            <Text style={styles.quote}>{quote.text}</Text>
            <Text style={styles.author}>- {quote.author}</Text>
          </View>
        </React.Fragment>
      )}
     
    </View>
    );
  }
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe6e6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        color: '#e600ac',
    },
    button: {
        borderRadius: 8,
        padding: 10,
        marginVertical: 15,
        backgroundColor: '#4d4dff',
    },
    buttonText: {
        color: '#fff',
    },
    quote: {
        fontSize: 21,
        textAlign: 'center',
    },
    author: {
        textAlign: 'right',
        marginTop: 20,
        fontStyle: 'italic',
    },
    quoteContainer: {
        marginHorizontal: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5
    }
});
    