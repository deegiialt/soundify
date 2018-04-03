import axios from "axios";
export default {
  // Gets all uploads
  getUploads: function() {
    return axios.get("/api/uploads");
  },
  // Gets the upload with the given id
  getUpload: function(id) {
    return axios.get("/api/uploads/" + id);
  },
  // Deletes the upload with the given id
  deleteUpload: function(id) {
    return axios.delete("/api/uploads/" + id);
  },
  // Saves a upload to the database
  saveUpload: function(uploadData) {
    return axios.post("/api/uploads", uploadData);
  }
};