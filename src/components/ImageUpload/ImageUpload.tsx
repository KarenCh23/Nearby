import '../ImageUpload/ImageUpload.scss';

import { ChangeEvent } from 'react';
import picture from '../../assets/img/producteur.jpeg';
import { useState } from 'react';
import { editCurrentUser } from '../../utils/utils';
import { useAppSelector } from '../hooks/customHooks';
const ImageUpload = () => {
  const [image, setImage] = useState('');
  const userData = useAppSelector((state) => state.userReducer.userData);
  const { email, role } = userData;
  const token = useAppSelector((state) => state.userReducer.token);
  const userId = useAppSelector((state) => state.userReducer.user_id);

  const convertBase64 = (file: Blob) => {
    const fileReader = new FileReader();
    console.log(file);
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      console.log(fileReader.result);
      setImage(fileReader.result as string);
    };

    fileReader.onerror = (error) => {
      console.log(error);
    };
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Vérifier si e.target.files est null ou non défini
    const selectedFile = e.target.files?.[0] || null;

    if (selectedFile) {
      convertBase64(selectedFile);
    } else {
      // Gérer le cas où aucun fichier n'est sélectionné (facultatif)
      console.log('Aucun fichier');
    }
  };
  return (
    <fieldset className="image__upload__component">
      <img className="profile__image" src={picture} />
      <input className="upload__image" type="file" onChange={handleChange} />
      <button
        className="send__button profile__button"
        onClick={() => {
          editCurrentUser(userData, userId, token, email, role, image);
        }}
      >
        Envoyer
      </button>
    </fieldset>
  );
};
export default ImageUpload;
