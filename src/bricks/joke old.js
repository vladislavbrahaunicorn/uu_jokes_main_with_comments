//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useScreenSize  } from "uu5g04-hooks";
import Config from "./config/config";
import Css from "./joke.css.js";
//@@viewOff:imports

const Joke = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Joke",
  //@@viewOff:statics



  //@@viewOn:propTypes
  //definuje jakyho typu maji byt dany objekty
  propTypes: {
    joke: UU5.PropTypes.shape({
      name: UU5.PropTypes.string.isRequired,
      text: UU5.PropTypes.string.isRequired,
      averageRating: UU5.PropTypes.number.isRequired
    }),
    colorSchema: UU5.PropTypes.string,
    onDetail: UU5.PropTypes.func,
    onUpdate: UU5.PropTypes.func,
    onDelete: UU5.PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //vychozi hodnota
  defaultProps: {
    joke: null,
    colorSchema: "blue",
    onDetail: () => {},
    onUpdate: () => {},
    onDelete: () => {}
  },
  //@@viewOff:defaultProps

  render({ joke, colorSchema, onDelete }) {

      //@@viewOn: hooks
      const screenSize = useScreenSize();
      //@@viewOff: hooks

      function renderRating() {
        if (screenSize === "xs") {
          return null;
        }
      
        let ratingSize = screenSize === "s" ? "m" : "s";
        return <UU5.Bricks.Rating value={joke.averageRating} size={ratingSize} />;
      }

    //@@viewOn:private
    function handleDelete() {
      onDelete(joke);
    }

    function handleDetail() {
      onDetail(joke);
    }

    function handleUpdate() {
      onUpdate(joke);
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderHeader() {
      return (
        <>
          {joke.name}
          <UU5.Bricks.Button onClick={handleDelete} colorSchema="red">
            <UU5.Bricks.Icon icon="mdi-delete" />
          </UU5.Bricks.Button>
        </>
      );
    }

    //vzdycky se musi neco vratit
    if (!joke) {
      return null;
    }

    return (
      <UU5.Bricks.Card className={Css.main()} colorSchema={colorSchema}>
      <div className={Css.header()} onClick={handleDetail}>
        {joke.name}
      </div>
      <div className={Css.content()} onClick={handleDetail}>
        <div className={Css.text()}>
          {joke.text}
          {joke.image && (
            <UU5.Bricks.Image
              className={Css.image()}
              src={Calls.getCommandUri(`/uu-app-binarystore/getBinaryData?code=${joke.image}`)}
              authenticate
            />
          )}
        </div>
      </div>
      <div className={Css.footer()}>
        <UU5.Bricks.Rating value={joke.averageRating} />
        <div>
          <UU5.Bricks.Button onClick={handleUpdate} bgStyle="transparent">
            <UU5.Bricks.Icon icon="mdi-pencil" />
          </UU5.Bricks.Button>
          <UU5.Bricks.Button onClick={handleDelete} bgStyle="transparent">
            <UU5.Bricks.Icon icon="mdi-delete" />
          </UU5.Bricks.Button>
        </div>
      </div>
    </UU5.Bricks.Card>
      
    );
    //@@viewOff:render
  }
});

export default Joke;