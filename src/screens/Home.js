import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AirbnbAuPairScreen() {
  const navigation = useNavigation(); // Hook para la navegación

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search Airbnb" 
          placeholderTextColor="#888"
        />
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Introducing Airbnb Au Pair</Text>
        <Text style={styles.subtitleText}>
          Choose a family home with a qualified childcare provider.
        </Text>
        
        <View style={styles.imageContainer}>
          <View style={styles.placeholderImage} />
        </View>
        
        <TouchableOpacity 
          style={styles.exploreButton} 
          onPress={() => navigation.navigate('DScreen')} // Navegar a HomesScreen
        >
          <Text style={styles.exploreButtonText}>EXPLORE HOMES /</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
      backgroundColor: 'white' 
    },
  searchContainer: {
     paddingHorizontal: 16,
      paddingTop: 80,
       paddingBottom: 8 
    },
  searchInput: {
     height: 40,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      paddingHorizontal: 12,
     fontSize: 16 
    },
  contentContainer: {
     flex: 1,
      paddingHorizontal: 16,
      paddingTop: 24 
    },
  titleText: {
     fontSize: 24,
      fontWeight: 'bold',
       marginBottom: 8 
    },
  subtitleText: {
     fontSize: 16,
      color: '#666',
       marginBottom: 24 
    },
  imageContainer: {
     aspectRatio: 1,
      width: '100%',
       justifyContent: 'center',
        alignItems: 'center',
         marginBottom: 24 
    },
  placeholderImage: {
     width: '100%',
      height: '100%',
       backgroundColor: '#e0e0e0',
        justifyContent: 'center',
         alignItems: 'center' 
    },
  exploreButton: {
     backgroundColor: 'black',
      paddingVertical: 12,
       paddingHorizontal: 16,
        borderRadius: 8,
         alignItems: 'center' 
    },
  exploreButtonText: {
     color: 'white',
      fontSize: 16,
       fontWeight: 'bold' 
    },
});
