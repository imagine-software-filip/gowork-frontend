import React from "react";
import { TimePicker, DatePicker, Button } from "antd";
import styles from "./DetailPage.module.css";
import StarRating from "../components/StarRating";
import andrew from "../assets/andrew.jpeg";
import BlobAnimation from "../components/UI/BlobAnimation";


const DetailPage = () => {
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.openingContainer}>
          <div className={styles.photoContainer}>
            <img
              src={andrew}
              alt="User"
              width={250}
              style={{ borderTopLeftRadius: 10 }}
            />
            <span className={styles.figureImg}>Michael Scott</span>
            <span style={{ color: "#fff", fontSize: 12 }}>
              East Lansing, MI
            </span>
          </div>
          <div className={styles.infoContainer}>
            <h2 style={{ marginBottom: 0 }}>
              I have been coaching for over 3 years and cleaning gutters for 2
            </h2>
            <span>Entreprenour</span>
            <p>
              I love the outdoors and teaching more advanced kids how to swing a
              golf club properly and get faster in the water. I have been
              coaching for over 3 years and cleaning gutters for 2. I am looking
              forward to meeting you!!
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Availbality: </span>{" "}
              2023-03-15 - 2023-06-25
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
              <h3>Swim Coach</h3>
              <h3>$50.00 per hour</h3>
            </div>
            <div className={styles.service}>
              <h3>Golf Coach</h3>
              <h3>$60.00 per hour</h3>
            </div>
            <div className={styles.service}>
              <h3>Gutter Cleaner</h3>
              <h3>$80.00 per hour</h3>
            </div>
          </div>
        </div>
        <div className={styles.scheduleContainer}>
          <h2
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 2,
              borderBottom: "1px solid #0091ff",
            }}
          >
            Don't wait up, book me
          </h2>
          <div className={styles.scheduleContainerPicker}>
            <DatePicker size="large" />
            <TimePicker
              use12Hours
              format="h:mm a"
              onChange={onChange}
              size="large"
            />
            <Button type="primary">Book Me</Button>
          </div>
        </div>
      </div>
      <BlobAnimation />
    </>
  );
};

export default DetailPage;
