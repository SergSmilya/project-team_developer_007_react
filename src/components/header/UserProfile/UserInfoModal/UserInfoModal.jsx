import React, { useState } from 'react';
import css from './UserInfoModal.module.css';
// import { Formik, Form, Field } from 'formik';
import defaultUserAvatar from '../../../../images/header/userDefault.png';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from 'redux/auth/operations';
import { selectUserAvatar, selectUserName } from 'redux/auth/selectors';
import { ReactComponent as Cross } from '../../../../images/header/svg/X.svg';
import { ReactComponent as Pencil } from '../../../../images/header/svg/pencil.svg';
import { ReactComponent as UserDefault } from '../../../../images/header/svg/usericondefault.svg';
import { ReactComponent as Plus } from '../../../../images/header/svg/plus.svg';
const defualtImage = defaultUserAvatar;

const UserInfoModal = ({ onClose }) => {
  const nickName = useSelector(selectUserName);
  const newAvatarUrl = useSelector(selectUserAvatar);

  const [name, setName] = useState(nickName);
  const [avatar, setAvatar] = useState(newAvatarUrl || '');
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const uploadAvatar = e => {
    if (e.target.files[0]) {
      const avatarTempUrl = URL.createObjectURL(e.target.files[0]);
      setAvatar(avatarTempUrl);
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    if (name) {
      formData.append('name', name);
    }
    if (file) {
      formData.append('avatar', file);
    }

    dispatch(updateUserData(formData));
    onClose();
  };

  return (
    <form id="modal" className={css.container}>
      <label htmlFor="avatar" id="modal" className={css.avatarLabel}>
        <input
          className={css.avatarContainer}
          type="file"
          accept=".jpg, .jpeg, .png"
          id="avatar"
          name="avatar"
          onChange={uploadAvatar}
        />
        <Plus className={css.addAvatarUrl} id="modal" />
        {/* <UserDefault className={css.usersvg} /> */}
        <img
          src={avatar || defualtImage}
          alt="avatar_image"
          className={css.avatarImage}
        />
        <Cross className={css.cross} onClick={onClose} />
      </label>

      <label htmlFor="name" id="modal" className={css.label}>
        <UserDefault className={css.svgafter} />
        <input
          type="text"
          id="name"
          name="name"
          placeholder={nickName}
          onChange={e => setName(e.target.value)}
          value={name}
          className={css.input}
        />
        <Pencil className={css.svgbefore} />
      </label>
      <button
        type="submit"
        onClick={handleSubmit}
        className={css.UserLogoutModalButton}
        aria-label="edit-profile-save-changes-button"
      >
        Save changes
      </button>
    </form>
  );
};

export default UserInfoModal;
