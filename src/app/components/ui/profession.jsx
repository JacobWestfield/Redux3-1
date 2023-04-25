import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    getProfessions,
    getProfessionsLoadingStatus,
    loadProfessionsList
} from "../../store/professions";

const Profession = ({ id }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getProfessionsLoadingStatus());
    const professions = useSelector(getProfessions(id));
    console.log(professions);
    const prof = professions.find((prof) => prof._id === id);
    console.log(prof);
    useEffect(() => {
        dispatch(loadProfessionsList());
    });
    if (!isLoading && prof) {
        return <p>{prof.name}</p>;
    } else return "Loading...";
};
Profession.propTypes = {
    id: PropTypes.string
};
export default Profession;
