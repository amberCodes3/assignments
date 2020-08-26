import React from 'react'
const {Provider, Consumer} = React.createContext

class ThemeContextProvider extends React.Component {
    state = {
        theme: "dark"
    }

    toggleTheme = () => {
        this.setState(prevState=> {
            return {
                theme: prevState.theme === 'light' ? 'dark' : 'light'
            }
        })
    }

    render() {
        return(
            <Provider value={this.state.theme}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}