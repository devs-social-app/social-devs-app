import axios from "axios";

export default {
  // Gets all snippets
  getBooks: function() {
    return axios.get("/api/snippets");
  },
  // Gets the snippet with the given id
  getBook: function(id) {
    return axios.get("/api/snippet/" + id);
  },
  // Deletes the snippet with the given id
  deleteBook: function(id) {
    return axios.delete("/api/snippet/" + id);
  },
  // Saves a snippet to the database
  saveBook: function(bookData) {
    return axios.post("/api/snippet", bookData);
  }
};
