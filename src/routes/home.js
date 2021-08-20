//@@viewOn:imports
import UU5 from 'uu5g04';
import 'uu5g04-bricks';
import {createVisualComponent} from 'uu5g04-hooks';
import Plus4U5 from 'uu_plus4u5g01';
import 'uu_plus4u5g01-bricks';

import Config from './config/config.js';
import Joke from '../bricks/joke';
import JokeProvider from '../bricks/joke-provider';
import JokeList from '../bricks/joke-list';
import JokeCreate from '../bricks/joke-create';

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + 'Home',
  //@@viewOff:statics
};

export const Home = createVisualComponent ({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render (props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return <div>Welcome in uuJokes</div>;

    //@@viewOff:render
  },
});

export default Home;
