import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface SKillCardProps extends TouchableOpacityProps {
    skill: String;
}

export function SkillCard({ skill, ...rest } : SKillCardProps) {
    return (
        <TouchableOpacity 
            style = {styles.buttonSKill}
            {...rest}
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