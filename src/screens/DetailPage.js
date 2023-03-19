import React from "react";
import styles from "./DetailPage.module.css";
import StarRating from "../components/StarRating";

const DetailPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.openingContainer}>
        <div className={styles.photoContainer}>
          <img
            src="https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="User"
            width={250}
            style={{ borderTopLeftRadius: 10 }}
          />
          <span className={styles.figureImg}>Michael Scott</span>
          <span style={{ color: "#fff", fontSize: 12 }}>East Lansing, MI</span>
        </div>
        <div className={styles.infoContainer}>
          <h2 style={{ marginBottom: 0 }}>Opening line</h2>
          <span>Programming</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Availbality: </span> 2023-03-15
            - 2023-06-25
          </p>
          <div className={styles.recommenedContainer}>
            <div className={styles.centerRecommened}>
              <StarRating />
              <img
                src="https://cdn-icons-png.flaticon.com/512/3500/3500954.png"
                alt="Recommened"
                width={64}
              />
              <span
                style={{
                  backgroundColor: "#0091FF",
                  borderRadius: 10,
                  padding: 2,
                  width: 106,
                  fontSize: 10,
                  zIndex: 10,
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                GoWork Recommended
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.servicesContainer}>
        <h2
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 2,
            borderBottom: "1px solid #0091ff",
          }}
        >
          Services
        </h2>
        <div className={styles.serviceContainer}>
          <div className={styles.service}>
            <h3>Landscaping</h3>
            <h3>$30.00 per hour</h3>
          </div>
          <div className={styles.service}>
            <h3>Snow Plowing</h3>
            <h3>$20.00 per hour</h3>
          </div>
          <div className={styles.service}>
            <h3>Snow Plowing</h3>
            <h3>$20.00 per hour</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
