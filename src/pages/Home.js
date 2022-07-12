import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    TouchableOpacity,
} from 'react-native';

export function Home(){
    const [newSKill, setNewSKill] = useState('');
    const [mySkills, setMySKills] = useState([]);

    function handleAddNewSkill(){
        setMySKills(oldState => [...oldState, newSKill]);
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>
                    Welcome, Juathan
            </Text>

            <TextInput 
                style = {styles.input}
                placeholder = "New skill"
                placeholderTextColor = '#555'
                onChangeText = {setNewSKill}
            />

            <TouchableOpacity 
                style = {styles.button}
                activeOpacity = {.7}
                onPress={handleAddNewSkill}
            >
                <Text style = {styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <Text style = {[styles.title, {marginVertical: 50}]}>
                My Skills
            </Text>

            {
                mySkills.map(skill =>(
                    <TouchableOpacity 
                        key ={skill} 
                        style = {styles.buttonSKill}
                    >
                        <Text style = {styles.skill}>
                            {skill}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    buttonSKill: {
        backgroundColor: '#1F1E25',
        padding: 20,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    skill: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});