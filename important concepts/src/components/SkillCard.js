import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export function SkillCard({ skill }) {
    return (
        <TouchableOpacity 
            style = {styles.buttonSKill}
        >
            <Text style = {styles.skill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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