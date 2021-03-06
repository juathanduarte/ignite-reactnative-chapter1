import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    FlatList,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id: String;
    name: String;
    date?: Date;
}

export function Home(){
    const [newSKill, setNewSKill] = useState('');
    const [mySkills, setMySKills] = useState<SkillData[]>([]);
    const [gretting, setGreeting] = useState('');

    function handleAddNewSkill(){
        const data = {
            id: new String(new Date().getTime()),
            name: newSKill
        }
        
        setMySKills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string){
        setMySKills(oldState => oldState.filter(
            skill => skill.id !== id
        ));
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12){
            setGreeting('Good morning!');
        }
        else if (currentHour >= 12 && currentHour < 18){
            setGreeting('Good afternoon!');
        }
        else{
            setGreeting('Good evening!');
        }
    }, [])

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>
                    Welcome, Juathan
            </Text>

            <Text style = {styles.greetings}>
                {gretting}
            </Text>

            <TextInput 
                style = {styles.input}
                placeholder = "New skill"
                placeholderTextColor = '#555'
                onChangeText = {setNewSKill}
            />

            <Button 
                title = 'Add' 
                onPress ={handleAddNewSkill}
            />

            <Text style = {[styles.title, {marginVertical: 50}]}>
                My Skills
            </Text>


            <FlatList 
                data={mySkills} 
                keyExtractor={item => item.id}
                renderItem = {({ item }) => (
                    <SkillCard 
                        skill={item.name}
                        onPress = {() => handleRemoveSkill(item.id)} 
                    />
                )} 
            />
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
    greetings: {
        color: '#FFF',
        fontWeight: 'bold',
    }
});