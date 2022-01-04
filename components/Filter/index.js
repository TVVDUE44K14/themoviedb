import {
  faAngleRight,
  faAngleDown,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import { Button } from "antd";
import styles from "./Filter.module.scss";
import {
  DatePicker,
  Collapse,
  Card,
  Input,
  Select,
  Radio,
  Form,
  Checkbox,
  Slider,
} from "antd";
import {
  sortOption,
  genres,
  listCertif,
  languageOption,
  userScore,
  userVotes,
  minutes,
} from "../../constant";
function Filter() {
  const { Option } = Select;
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [isOpenWhere, setIsOpenWheres] = useState(false);
  const [value, setValue] = useState([0, 10]);
  const toggleSort = () => setIsOpenSort(!isOpenSort);
  const toggleFilters = () => setIsOpenFilters(!isOpenFilters);
  const handleWhereToWatch = () => setIsOpenWheres(!isOpenWhere);
  const [valueRadio, setValueRadio] = useState(1);
  const handleChange = (value) => {
    setValue(value);
  };

  const onChange = (e) => {
    setValueRadio(e.target.value);
  };
  const formatter = (value) => {
    return `0 minutes - ${value}minutes`;
  };
  return (
    <>
      <div className={styles.filter}>
        <div className={styles.filterSort}>
          <div
            className={styles.title}
            onClick={toggleSort}
            style={{ cursor: "pointer" }}
          >
            <h2>Sort</h2>
            <span>
              <FontAwesomeIcon
                icon={isOpenSort ? faAngleDown : faAngleRight}
                size="lg"
                fixedWidth
              />
            </span>
          </div>
          {isOpenSort && (
            <Collapse>
              <Card>
                <div style={{ padding: "14px 16px 16px 16px" }}>
                  <h3>Sort Result By</h3>
                  <Select
                    style={{ width: "225px" }}
                    name="select"
                    defaultValue={sortOption[0]}
                  >
                    {sortOption.map((item, keys) => (
                      <Option style={{ padding: "5px" }} key={keys}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </div>
              </Card>
            </Collapse>
          )}
        </div>
        <div className={styles.filters}>
          <div
            className={styles.title}
            onClick={toggleFilters}
            style={{ cursor: "pointer", background: "white" }}
          >
            <h2>Filters </h2>
            <span>
              {isOpenFilters ? (
                <FontAwesomeIcon icon={faAngleDown} size="lg" fixedWidth />
              ) : (
                <FontAwesomeIcon icon={faAngleRight} size="lg" fixedWidth />
              )}
            </span>
          </div>

          {isOpenFilters && (
            <Collapse>
              <Card>
                <div
                  style={{
                    borderTop: "1px solid #eee",
                    padding: "14px 16px 16px 16px",
                  }}
                >
                  <h3>
                    Show Me{" "}
                    <span style={{ marginLeft: "5px" }}>
                      <FontAwesomeIcon
                        icon={faQuestionCircle}
                        size="sm"
                        fixedWidth
                      />
                    </span>
                  </h3>
                  <div>
                    <Radio.Group onChange={onChange} value={valueRadio}>
                      <Radio value={1}>Everything</Radio>
                      <Radio value={2}>Movie I Havent Seen</Radio>
                      <Radio value={3}>Movie I Have Seen</Radio>
                    </Radio.Group>
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid #eee",
                    padding: "14px 16px 0px 16px",
                  }}
                >
                  <h3>Availabilities</h3>
                  <div>
                    <Form.Item name="checkbox-group">
                      <Checkbox style={{ lineHeight: "32px" }} defaultChecked>
                        Search all availabilities?
                      </Checkbox>
                    </Form.Item>
                  </div>
                </div>
                <div
                  style={{
                    borderTop: "1px solid #eee",
                    padding: "14px 16px 16px 16px",
                  }}
                >
                  <h3>Release Dates</h3>
                  <div>
                    <Form.Item name="checkbox-group">
                      <Checkbox style={{ lineHeight: "32px" }} defaultChecked>
                        Search all availabilities?
                      </Checkbox>
                    </Form.Item>
                    <Form.Item
                      label="From"
                      style={{
                        marginBottom: 0,
                      }}
                    >
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "136px",
                        }}
                      >
                        <DatePicker />
                      </Form.Item>
                    </Form.Item>
                    <Form.Item
                      label="To"
                      style={{
                        marginBottom: 0,
                      }}
                    >
                      <Form.Item
                        style={{
                          display: "inline-block",
                          width: "136px",
                        }}
                      >
                        <DatePicker />
                      </Form.Item>
                    </Form.Item>
                  </div>
                </div>
                <div
                  style={{
                    borderTop: "1px solid #eee",
                    padding: "14px 16px 16px 16px",
                  }}
                >
                  <h3>Genres</h3>
                  <div>
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        flexWrap: "wrap",
                        alignItems: "center",
                        paddingLeft: "0px",
                      }}
                    >
                      {genres.map((item, index) => (
                        <li
                          style={{
                            cursor: "pointer",
                            border: " 0.5px solid #9e9e9e",
                            marginTop: "5px",
                            marginRight: "8px",
                            borderRadius: "20px",
                            padding: "4px 12px",
                          }}
                          key={index}
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  style={{
                    borderTop: "1px solid #eee",
                    padding: "14px 16px 16px 16px",
                  }}
                >
                  <h3>Certification</h3>
                  <div>
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        flexWrap: "wrap",
                        alignItems: "center",
                        paddingLeft: "0px",
                      }}
                    >
                      {listCertif.map((item, index) => (
                        <li
                          style={{
                            cursor: "pointer",
                            border: " 0.5px solid #9e9e9e",
                            marginTop: "5px",
                            marginRight: "8px",
                            borderRadius: "20px",
                            padding: "4px 12px",
                          }}
                          key={index}
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  style={{
                    borderTop: "1px solid #eee",
                    padding: "14px 16px 16px 16px",
                  }}
                >
                  <h3>
                    Language
                    <span style={{ marginLeft: "5px" }}>
                      <FontAwesomeIcon
                        icon={faQuestionCircle}
                        size="sm"
                        fixedWidth
                      />
                    </span>
                  </h3>

                  <Select
                    style={{ width: "225px" }}
                    name="select"
                    defaultValue={languageOption[0]}
                  >
                    {languageOption.map((item, keys) => (
                      <Option style={{ padding: "5px" }} key={keys}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div
                  style={{
                    borderTop: "1px solid #eee",
                    padding: "14px 16px 16px 16px",
                  }}
                >
                  <h3>User Score</h3>

                  <Slider marks={userScore} defaultValue={10} max={10} />
                </div>
                <div
                  id="vote"
                  style={{
                    borderTop: "1px solid #eee",
                    padding: "14px 16px 16px 16px",
                  }}
                >
                  <h3>Minimum User Votes</h3>
                  <Slider marks={userVotes} defaultValue={0} max={500}></Slider>
                </div>
                <div
                  style={{
                    borderTop: "1px solid #eee",
                    padding: "14px 16px 16px 16px",
                  }}
                >
                  <h3>Runtime</h3>
                  <Slider
                    marks={minutes}
                    defaultValue={400}
                    max={400}
                    tipFormatter={formatter}
                  ></Slider>
                </div>
                <div
                  style={{
                    borderTop: "1px solid #eee",
                    padding: "14px 16px 16px 16px",
                    height: "100px",
                  }}
                >
                  <h3>Keywords </h3>
                  <div style={{ marginBotton: "10px" }}>
                    <Form.Item>
                      <Input
                        type="text"
                        style={{ width: "100%" }}
                        placeholder="Filter by keywords..."
                      />
                    </Form.Item>
                  </div>
                </div>
              </Card>
            </Collapse>
          )}
        </div>
        <div className={styles.filterWhere}>
          <div
            className={styles.title}
            onClick={handleWhereToWatch}
            style={{ cursor: "pointer" }}
          >
            <h2>Where To Watch</h2>
            <span>
              {isOpenWhere ? (
                <FontAwesomeIcon icon={faAngleDown} size="lg" fixedWidth />
              ) : (
                <FontAwesomeIcon icon={faAngleRight} size="lg" fixedWidth />
              )}
            </span>
          </div>
          {isOpenWhere && (
            <Collapse style={{ background: "white !important" }}>
              <div
                style={{
                  borderTop: "1px solid #eee",
                  padding: "14px 16px 0px 16px",
                }}
              >
                <h3>My Services </h3>
                <Form.Item name="checkbox-group">
                  <Checkbox
                    style={{ lineHeight: "32px" }}
                    defaultChecked={false}
                    disabled
                  >
                    Restrict searches to my subscribed services?
                  </Checkbox>
                </Form.Item>
              </div>
              <div
                style={{
                  borderTop: "1px solid #eee",
                  padding: "14px 16px 16px 16px",
                }}
              >
                <h3>Country</h3>
                <Select
                  style={{ width: "225px" }}
                  name="select"
                  defaultValue={languageOption[0]}
                >
                  {languageOption.map((item, keys) => (
                    <Option style={{ padding: "5px" }} key={keys}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </div>
            </Collapse>
          )}
        </div>
        <div className={styles.actionSearch}>
          <Button className={styles.btnSearch}>Search</Button>
        </div>
      </div>
    </>
  );
}
export default Filter;
