//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useDataList } from "uu5g04-hooks";
import Config from "./config/config";
import Calls from "calls";
import JokesTitle from "./jokes-title";
//@@viewOff:imports

let initialJokes = [
  {
    id: 1,
    name: "Joke 1",
    text: "This is my joke 1...",
    averageRating: 5.0
  },
  {
    id: 2,
    name: "Joke 2",
    text: "This is my joke 2...",
    averageRating: 4.0
  },
  {
    id: 3,
    name: "Joke 3",
    text: "This is my joke 3...",
    averageRating: 3.0
  },
  {
    id: 4,
    name: "Joke 4",
    text: "This is my joke 4...",
    averageRating: 2.0
  },
  {
    id: 5,
    name: "Joke 5",
    text: "This is my joke 5...",
    averageRating: 1.0
  }
];

const JokeProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "JokeProvider",
  //@@viewOff:statics

  render({ children }) { //children jsou ty vnoreny htm elementy, nebo i samotny REacti komponenety

    //@viewOn:hooks
    //ziska prvni a druhou hodnotu z pole a priradi je do constanty jokes a setJokes
    //v initialJokes je defaultní stav co se má vrátit
    //na prvni pozici je něco, co se bude měnit a na druhý pozici je metoda, která se zavolá pro změnu daného např. pole
    // musi byt vzdy v render funkci
    
    // const [jokes, setJokes] = useState(initialJokes);

    let listDataValues = useDataList({
      pageSize: 200,
      handlerMap: {
        load: Calls.listJokes,
        createJoke: Calls.createJoke,
        updateJoke: Calls.updateJoke,
        deleteJoke: Calls.deleteJoke
      }
    });

    let { state, data, newData, pendingData, errorData, handlerMap } = listDataValues;
    //@viewOff:hooks

    //@@viewOn:private
    // function handleCreate(joke) {
    //   joke.id = UU5.Common.Tools.generateUUID();
    //   joke.averageRating = Math.round(Math.random() * 5); // <0, 5>
    //   setJokes(prevJokes => prevJokes.concat([joke]));
    // }

    //je treba volat metodu vracenou z useState - takze pri volani deletu zavolame zmenu (jinak by React nevedel, ze se to ma zmenit)
    
    // function handleDelete(joke) {
    //   setJokes(prevJokes => prevJokes.filter(item => item.id !== joke.id));
    // }
    //@@viewOff:private

    //@@viewOn:render
    return children({
      state,
      data,
      newData,
      pendingData,
      errorData,
      handlerMap
    });
    //@@viewOff:render
  }
});

export default JokeProvider;