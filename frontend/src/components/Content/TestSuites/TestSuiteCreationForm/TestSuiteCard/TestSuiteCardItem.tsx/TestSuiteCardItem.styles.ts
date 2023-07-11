import styled from 'styled-components';

export const TestSuiteCardItemWrapper = styled.div<{
    value?: string | number,
    type: 'id' | 'title' | 'description' | 'count' | 'date' | null
}>`
text-align: start;
padding: ${(props) => {
        if (props.type === 'count'
            || props.type === 'date') return `0 4px`
    }}; 
width: ${(props) => {
        if (!props.type) return `8px`
        if (props.type === 'id') return `64px`
        if (props.type === 'title') return `240px`
        if (props.type === 'description') return `675px`

    }};
height: ${(props) => {
        if (!props.type) return `8px`
        if (props.type === 'count'
            || props.type === 'date') return `16px`
    }};
line-height: ${(props) => {
   if (props.type === 'count'
        || props.type === 'date') return `18px`
}}; 
background-color: ${(props) => {
        if (!props.type
            || props.type === 'count'
            || props.type === 'date') return props.theme.colors.second
    }};
border: ${(props) => {
        if (!props.type) return `1px solid ${props.theme.colors.main}`
    }};
border-radius: ${(props) => {
        if (!props.type) return `50%`
        if (props.type === 'count' || props.type === 'date') return `12px`
    }};
font-weight: ${(props) => {
        if (props.type !== 'id') return 700
    }};
font-size: ${(props) => {
        if (props.type === 'description') return '16px'
        if (props.type === 'count' || props.type === 'date') return '12px'
    }};
`;