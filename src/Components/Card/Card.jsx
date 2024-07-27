import React from "react";
import styles from "./Card.module.css";
import {Chip, Tooltip} from "@mui/material";

const Card = ({data, type}) => {
    const getCard = (type) => {
        switch (type) {
            case "album": {
                const {image, follows, title, songs} = data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                        <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <img src={image} alt="album" width={160} height={165}/>
                                <div className={styles.banner}>
                                    <Chip
                                        label={`${follows} Follows`}
                                        size="small"
                                        className={styles.chip}
                                    />
                                </div>
                            </div>
                            <div className={styles.titleWrapper}>
                                <p>{title}</p>
                            </div>
                        </div>
                    </Tooltip>
                );
            }
            case "songs": {
                const {image, likes, title} = data;
                return (
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={image} alt="songs"/>
                            <div className={styles.banner}>
                                <div className={styles.pill}>
                                    <p> {likes} Likes</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.titleWrapper}>
                            <p>{title}</p>
                        </div>
                    </div>
                );
            }
            default:
                return <></>;
        }
    };

    return getCard(type);
};

export default Card;
