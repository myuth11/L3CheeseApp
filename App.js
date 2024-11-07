// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput,Button,TouchableOpacity } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
// import {Alert} from 'react-native';
// import {ToastAndroid} from 'react-native';
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <RNPickerSelect
//         onValueChange={(value) => console.log(value)}
//         items={[
//           {label:'Admin',value:'admin'},
//             {label:'Guest',value:'Guest'},
//         ]} />
//       <Text>Password:</Text>
//       <TextInput style={{borderWidth: 1}} secureTextEntry={true}/>
//         {/*<Button title="LOG IN" color={"blue"} onPress={() =>Alert.alert("Welcome") }/>*/}
//         <Button
//             title="LOG IN"
//             color="blue"
//             onPress={() => ToastAndroid.show("Welcome", ToastAndroid.SHORT)} // Added the duration
//         />
//         {/*<TouchableOpacity onPress={() => Alert.alert("Welcome")}>*/}
//         {/*    <Text style={styles.buttonText}>LOG IN</Text>*/}
//         {/*</TouchableOpacity>*/}
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//
//
//   },
//   input: {
//
//     padding:10,
//     width:'80%',
//     marginVertical:10,
//   }
// });

//exercise1G
//

//exercise2
import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');

    const correctAnswers = {
        answer1: 'Cheddar',
        answer2: 'Brie',
        answer3: 'Gouda',
    };

    const handleSubmit = () => {
        let correctCount = 0;
        if (answer1 === correctAnswers.answer1) correctCount++;
        if (answer2 === correctAnswers.answer2) correctCount++;
        if (answer3 === correctAnswers.answer3) correctCount++;

        Alert.alert(`You got ${correctCount} out of 3 correct!`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Cheese Quiz</Text>

            <Text style={styles.question}>1. What cheese is this?</Text>
            <Image style={styles.image} source={require('./assets/cheddar.jpg')} />
            <RNPickerSelect
                onValueChange={setAnswer1}
                items={[
                    { label: 'Cheddar', value: 'Cheddar' },
                    { label: 'Brie', value: 'Brie' },
                    { label: 'Gouda', value: 'Gouda' },
                ]}
            />

            <Text style={styles.question}>2. What cheese is this?</Text>
            <Image style={styles.image} source={require('./assets/brie.jpg')} />
            <RNPickerSelect
                onValueChange={setAnswer2}
                items={[
                    { label: 'Cheddar', value: 'Cheddar' },
                    { label: 'Brie', value: 'Brie' },
                    { label: 'Gouda', value: 'Gouda' },
                ]}
            />

            <Text style={styles.question}>3. What cheese is this?</Text>
            <Image style={styles.image} source={require('./assets/gouda.jpg')} />
            <RNPickerSelect
                onValueChange={setAnswer3}
                items={[
                    { label: 'Cheddar', value: 'Cheddar' },
                    { label: 'Brie', value: 'Brie' },
                    { label: 'Gouda', value: 'Gouda' },
                ]}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit Answers</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    question: {
        fontSize: 18,
        marginVertical: 10,
    },
    image: {
        width: 200,
        height: 150,
        resizeMode: 'cover',
        alignSelf: 'center',
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#841584',
        padding: 15,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});



