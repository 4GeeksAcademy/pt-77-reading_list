export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: [],
    planets: [],
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'add_character':

      return {
        ...store,
        characters: action.payload
      };
    case 'add_planet':

      return {
        ...store,
        planets: action.payload
      };
    case 'toggle_favorties':
      let favs = store.favorites

      if (favs.includes(action.payload)) {
        ///filter because it is already in the favorites array
        favs = favs.filter((fav, index) => fav.name !== action.payload)
      }
      else {
        // add to the favoriets array
        favs = [...favs, action.payload]
      }

      return {
        ...store,
        favorites: favs
      };

    default:
      throw Error('Unknown action.');
  }
}
