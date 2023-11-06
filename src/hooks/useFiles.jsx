import { useEffect, useState } from "react";
import { getFiles, uploadFiletoBucket } from "../services/storage";

const initialState = {
  file: null,
  filePath: "",
};

const useFile = (_id) => { //
  const [files, setFiles] = useState([]);
  const [fileData, setFileData] = useState(initialState);

  useEffect(() => {
    getFiles(_id).then((response) => { //
      const formatFiles = response.map((file) => {
        const {
          id,
          name,
          metadata: { mimetype },
        } = file;
        return {
          id, 
          name,
          mimetype,
        };
      });
      setFiles(formatFiles);
    });
  }, []);

  const uploadFile = (e) => {
    try {
      if (!e.target.files || e.target.files.length === 0) {
        throw new Error("Suba un archivo");
      }
      const file = e.target.files[0];
      const fileName = file.name;
      setFileData({
        filePath: fileName,
        file: file
      });
      //console.log(file);
    } catch (error) {
      console.log(error);
    }
  };
  
  const saveFile = async (e) => {
      e.preventDefault();
      const { filePath, file } = fileData;
      await uploadFiletoBucket(_id, filePath, file); //
      const { name, type: mimetype, lastModified: id } = file;
      setFiles((prevFiles) => [...prevFiles, { id, name, mimetype }]);
      setFileData(initialState);
    };
  
    return {
      files,
      uploadFile,
      saveFile,
    };

};

export default useFile;