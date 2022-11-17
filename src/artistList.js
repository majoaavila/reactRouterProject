import React, {Component} from 'react';
import ListView from 'deprecated-react-native-listview';
import {
    TouchableOpacity
} from 'react-native';

import ArtistBox from './artistBox';

import {Actions} from 'react-native-router-flux';

export default class ArtistList extends Component<Props> {
    constructor(props) {
        super(props); //crea el constructor en cunato inicia
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            dataSource: ds
        }
    }
    //metodo para actualizar
    componentDidMount() {
        this.updateDataSource(this.props.artists)
    }
    //si hay informacion nueva, es decir, que las newProps sean diferentes de las props, entonces, se actualiza
    componentWillReceiveProps(newProps) {
        if(newProps.artists !== this.props.artists) {
            this.updateDataSource(newProps.artists)
        }
    }
    //convierte la info en algo que sea compatible con la lista
    updateDataSource = (data) => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data)
        })
    }
    handlePress(artist) {
        console.warn(artist.name)
    }

    render() {
        return (
            <ListView 
            enableEmptySections = {true}
            dataSource={this.state.dataSource}
            renderRow={(artist) => {
                return(
                    <TouchableOpacity onPress={() => this.handlePress(artist)}>
                        <ArtistBox artist={artist}/>
                    </TouchableOpacity>
                )

            }}
            />
        );
    }
}