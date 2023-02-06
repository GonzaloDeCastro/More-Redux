import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import confederations from "../mocks/confederations.json";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  body: {
    backgroundColor: "#121212",

    display: "flex",
    justifyContent: "center",
    width: "100%",
    color: "#fff",
  },
  container: {
    width: "70vw",
  },
  banner: {
    width: "100%",
    borderRadius: "15px",
  },
  selector: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
    fontSize: "24px",
  },
  containerFederation: {
    marginTop: "3rem",
  },

  headerFederation: {
    backgroundColor: "#121212",
    borderRadius: "6px 6px 0px 0px",
  },
  headerFederationContent: {
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
    fontSize: "16px",
  },
  bodyFederation: {
    backgroundColor: "#142C39",
    paddingBottom: "2rem",
    marginBottom: "4rem",
    borderRadius: "0px 0px 20px 20px",
  },
  searchAndOrderBy: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "2rem",
  },

  bodyFederationEmpty: {
    backgroundColor: "#142C39",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    borderRadius: "0px 0px 20px 20px",
    fontSize: "24px",
    marginBottom: "4rem",
  },
  titleCategory: {
    padding: "4% 11.5% 4% 11.5%",
    cursor: "pointer",
    "@media (max-width: 1367px)": {
      padding: "4% 9.5% 4% 9.5%",
    },
  },
  severalCategories: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#142127",
    marginTop: "1.2rem",
    marginRight: "1rem",
    borderRadius: "6px",
    height: "128px",
    width: "177px",
    cursor: "pointer",
  },
  clubs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    background: "rgba(18, 18, 18, 0.25);",
    margin: "1.2rem 2rem 0rem 0rem ",
    borderRadius: "6px",
    height: "281px",
    width: "227px",
    cursor: "pointer",
  },
}));

const SelectFiltersAndSearch = () => {
  const classes = useStyles();
  const [confederation, setConfederation] = useState("");
  const [federation, setFederation] = useState("");
  const [club, setClubs] = useState("");
  const [selectClubTeamPlayer, setSelectClubTeamPlayer] = useState("");
  const [selectedOption, setSelectedOption] = useState("Sort by");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const onSearchChange = (event) => {
    setPage(0);
    setSearch(event.target.value.toLowerCase());
  };

  const searchingTerm = (search) => {
    return (x) => {
      return x?.club.toLowerCase().includes(search) || !search;
    };
  };
  useEffect(() => {
    if (federation !== "") {
      setSelectClubTeamPlayer("CLUBS");
    }
  }, [federation]);

  useEffect(() => {
    document.body.classList.remove("background-login");
  }, []);

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <div className={classes.selector}>
          <div> Confederation</div>
          <div></div>
        </div>
        <hr />
        <div style={{ display: "flex" }}>
          {confederations.map((conf) =>
            confederation === conf.id ? (
              <div
                key={conf.id}
                className={classes.severalCategories}
                onClick={() => setConfederation(conf.id)}
                style={{ border: "2px solid #00FFFF" }}
              >
                <div>
                  <img
                    src={conf.avatar}
                    alt="avatar"
                    style={{ width: "61px", height: "54px" }}
                  />
                </div>
                <div style={{ fontSize: "20px" }}>{conf.confederation}</div>
              </div>
            ) : (
              <div
                key={conf.id}
                className={classes.severalCategories}
                onClick={() => setConfederation(conf.id)}
              >
                <div>
                  <img
                    src={conf.avatar}
                    alt="avatar"
                    style={{ width: "61px", height: "54px" }}
                  />
                </div>
                <div style={{ fontSize: "20px" }}>{conf.confederation}</div>
              </div>
            )
          )}
        </div>
        <div className={classes.selector}>
          <div> Federation</div>
          <div></div>
        </div>
        <hr />

        {confederations.map((conf) => (
          <div key={conf.id} style={{ display: "flex" }}>
            {confederation === conf.id &&
              conf.federations.map((feder) =>
                federation === feder.id ? (
                  <div
                    key={feder.id}
                    className={classes.severalCategories}
                    onClick={() => setFederation(feder.id)}
                    style={{ border: "2px solid #00FFFF" }}
                  >
                    <div>
                      <img
                        src={feder.avatar}
                        alt="avatar"
                        style={{ height: "52px", width: "52px" }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        padding: "0px 6px 0px 6px",
                        textAlign: "center",
                      }}
                    >
                      {feder.federation}
                    </div>
                  </div>
                ) : (
                  <div
                    key={feder.id}
                    className={classes.severalCategories}
                    onClick={() => setFederation(feder.id)}
                  >
                    <div>
                      <img
                        src={feder.avatar}
                        alt="avatar"
                        style={{ height: "52px", width: "52px" }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        padding: "0px 6px 0px 6px",
                        textAlign: "center",
                      }}
                    >
                      {feder.federation}
                    </div>
                  </div>
                )
              )}
          </div>
        ))}
        <div className={classes.containerFederation}>
          <div className={classes.headerFederation}>
            <div className={classes.headerFederationContent}>
              {selectClubTeamPlayer === "CLUBS" ? (
                <p
                  className={classes.titleCategory}
                  onClick={() => setSelectClubTeamPlayer("CLUBS")}
                  style={{ borderBottom: "4px solid #00FFFF" }}
                >
                  CLUBS
                </p>
              ) : (
                <p
                  className={classes.titleCategory}
                  onClick={() => setSelectClubTeamPlayer("CLUBS")}
                >
                  CLUBS
                </p>
              )}

              {selectClubTeamPlayer === "TEAMS" ? (
                <p
                  className={classes.titleCategory}
                  onClick={() => setSelectClubTeamPlayer("TEAMS")}
                  style={{ borderBottom: "4px solid #00FFFF" }}
                >
                  TEAMS
                </p>
              ) : (
                <p
                  className={classes.titleCategory}
                  onClick={() => setSelectClubTeamPlayer("TEAMS")}
                >
                  TEAMS
                </p>
              )}

              {selectClubTeamPlayer === "PLAYERS" ? (
                <p
                  className={classes.titleCategory}
                  onClick={() => setSelectClubTeamPlayer("PLAYERS")}
                  style={{ borderBottom: "4px solid #00FFFF" }}
                >
                  PLAYERS
                </p>
              ) : (
                <p
                  className={classes.titleCategory}
                  onClick={() => setSelectClubTeamPlayer("PLAYERS")}
                >
                  PLAYERS
                </p>
              )}
            </div>
          </div>
          {federation !== "" ? (
            <>
              <div className={classes.bodyFederation}>
                <div className={classes.searchAndOrderBy}>
                  <div>
                    <input
                      placeholder="Search"
                      onChange={(event) => onSearchChange(event)}
                      value={search}
                      style={{
                        height: "42px",
                        width: "427px",
                        borderRadius: "8px",
                        fontFamily: "Hind Siliguri",
                        padding: "0px 0px 0px 12px",
                        fontSize: "17px",
                      }}
                    />
                  </div>
                  <div>
                    <select
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      style={{
                        height: "42px",
                        width: "427px",
                        borderRadius: "8px",
                        background: "#121212",
                        color: "#fafafa",
                        fontFamily: "Hind Siliguri",
                        padding: "10px 0px 10px 12px",
                        fontSize: "15px",
                        borderColor: "#00ffff",
                      }}
                    >
                      {selectedOption === "Sort by" && (
                        <option>{selectedOption}</option>
                      )}
                      <option value="Sort A-Z">Sort A-Z</option>
                      <option value="Sort Z-A">Sort Z-A</option>
                      <option value="Best sellers">Best sellers</option>
                    </select>
                  </div>
                </div>
                {confederations.map((conf) => (
                  <div key={conf.id}>
                    {confederation === conf.id &&
                      conf.federations.map(
                        (feder) =>
                          federation === feder.id && (
                            <div
                              key={feder.id}
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                paddingLeft: "2rem",
                              }}
                            >
                              {(feder.clubes.length > 0) &
                                (selectedOption === "Sort by") ||
                              selectedOption === "Sort A-Z"
                                ? feder.clubes
                                    .sort((a, b) => {
                                      if (a.club < b.club) {
                                        return -1;
                                      }
                                      if (a.club > b.club) {
                                        return 1;
                                      } else {
                                        return 0;
                                      }
                                    })
                                    .filter(searchingTerm(search))
                                    .map((clu) =>
                                      club === clu.id ? (
                                        <div
                                          key={clu.id}
                                          className={classes.clubs}
                                          onClick={() => setClubs(clu.id)}
                                          style={{
                                            border: "2px solid #00FFFF",
                                          }}
                                        >
                                          <div>
                                            <img
                                              src={clu.avatar}
                                              alt="avatar"
                                              style={{
                                                width: "106px",
                                                height: "122px",
                                                paddingBottom: "1.5rem",
                                              }}
                                            />
                                          </div>
                                          <div
                                            style={{
                                              fontSize: "16px",
                                              padding: "0px 6px 0px 6px",
                                              textAlign: "center",
                                            }}
                                          >
                                            <div
                                              style={{
                                                backgroundColor: "#0F1E25",
                                                width: "227px",
                                                height: "93px",
                                                borderRadius:
                                                  "0px 0px 15px 15px",
                                                marginLeft: "-0.4rem",
                                                marginBottom: "-2.3rem",
                                              }}
                                            >
                                              <div
                                                style={{
                                                  textAlign: "left",
                                                  paddingLeft: "1rem",
                                                  paddingTop: "0.5rem",
                                                }}
                                              >
                                                {clu.club}
                                              </div>
                                              <hr
                                                style={{
                                                  textAlign: "center",
                                                  marginLeft: "1rem",
                                                  marginRight: "1rem",
                                                }}
                                              />
                                              <div
                                                style={{
                                                  textAlign: "left",
                                                  color: "#00FFFF",
                                                  paddingLeft: "1rem",
                                                  paddingTop: "0.5rem",
                                                }}
                                              >
                                                {clu.price}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      ) : (
                                        <div
                                          key={clu.id}
                                          className={classes.clubs}
                                          onClick={() => setClubs(clu.id)}
                                        >
                                          <div>
                                            <img
                                              src={clu.avatar}
                                              alt="avatar"
                                              style={{
                                                width: "106px",
                                                height: "122px",
                                                paddingBottom: "1.5rem",
                                              }}
                                            />
                                          </div>
                                          <div
                                            style={{
                                              fontSize: "16px",
                                              padding: "0px 6px 10px 6px",
                                              textAlign: "center",
                                            }}
                                          >
                                            <div
                                              style={{
                                                backgroundColor: "#0F1E25",
                                                width: "227px",
                                                height: "93px",
                                                borderRadius:
                                                  "0px 0px 15px 15px",
                                                marginLeft: "-0.4rem",
                                                marginBottom: "-4rem",
                                              }}
                                            >
                                              <div
                                                style={{
                                                  textAlign: "left",
                                                  paddingLeft: "1rem",
                                                  paddingTop: "0.5rem",
                                                }}
                                              >
                                                {clu.club}
                                              </div>
                                              <hr
                                                style={{
                                                  textAlign: "center",
                                                  marginLeft: "1rem",
                                                  marginRight: "1rem",
                                                }}
                                              />
                                              <div
                                                style={{
                                                  textAlign: "left",
                                                  color: "#00FFFF",
                                                  paddingLeft: "1rem",
                                                  paddingTop: "0.5rem",
                                                }}
                                              >
                                                {clu.price}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )
                                    )
                                : (feder.clubes.length > 0) &
                                  (selectedOption === "Sort Z-A")
                                ? feder.clubes
                                    .sort((b, a) => {
                                      if (a.club < b.club) {
                                        return -1;
                                      }
                                      if (a.club > b.club) {
                                        return 1;
                                      } else {
                                        return 0;
                                      }
                                    })
                                    .filter(searchingTerm(search))
                                    .map((clu) =>
                                      club === clu.id ? (
                                        <div
                                          key={clu.id}
                                          className={classes.clubs}
                                          onClick={() => setClubs(clu.id)}
                                          style={{
                                            border: "2px solid #00FFFF",
                                          }}
                                        >
                                          <div>
                                            <img
                                              src={clu.avatar}
                                              alt="avatar"
                                              style={{
                                                width: "106px",
                                                height: "122px",
                                                paddingBottom: "1.5rem",
                                              }}
                                            />
                                          </div>
                                          <div
                                            style={{
                                              fontSize: "16px",
                                              padding: "0px 6px 0px 6px",
                                              textAlign: "center",
                                            }}
                                          >
                                            <div
                                              style={{
                                                backgroundColor: "#0F1E25",
                                                width: "227px",
                                                height: "93px",
                                                borderRadius:
                                                  "0px 0px 15px 15px",
                                                marginLeft: "-0.4rem",
                                                marginBottom: "-2.3rem",
                                              }}
                                            >
                                              <div
                                                style={{
                                                  textAlign: "left",
                                                  paddingLeft: "1rem",
                                                  paddingTop: "0.5rem",
                                                }}
                                              >
                                                {clu.club}
                                              </div>
                                              <hr
                                                style={{
                                                  textAlign: "center",
                                                  marginLeft: "1rem",
                                                  marginRight: "1rem",
                                                }}
                                              />
                                              <div
                                                style={{
                                                  textAlign: "left",
                                                  color: "#00FFFF",
                                                  paddingLeft: "1rem",
                                                  paddingTop: "0.5rem",
                                                }}
                                              >
                                                {clu.price}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      ) : (
                                        <div
                                          key={clu.id}
                                          className={classes.clubs}
                                          onClick={() => setClubs(clu.id)}
                                        >
                                          <div>
                                            <img
                                              src={clu.avatar}
                                              alt="avatar"
                                              style={{
                                                width: "106px",
                                                height: "122px",
                                                paddingBottom: "1.5rem",
                                              }}
                                            />
                                          </div>
                                          <div
                                            style={{
                                              fontSize: "16px",
                                              padding: "0px 6px 10px 6px",
                                              textAlign: "center",
                                            }}
                                          >
                                            <div
                                              style={{
                                                backgroundColor: "#0F1E25",
                                                width: "227px",
                                                height: "93px",
                                                borderRadius:
                                                  "0px 0px 15px 15px",
                                                marginLeft: "-0.4rem",
                                                marginBottom: "-4rem",
                                              }}
                                            >
                                              <div
                                                style={{
                                                  textAlign: "left",
                                                  paddingLeft: "1rem",
                                                  paddingTop: "0.5rem",
                                                }}
                                              >
                                                {clu.club}
                                              </div>
                                              <hr
                                                style={{
                                                  textAlign: "center",
                                                  marginLeft: "1rem",
                                                  marginRight: "1rem",
                                                }}
                                              />
                                              <div
                                                style={{
                                                  textAlign: "left",
                                                  color: "#00FFFF",
                                                  paddingLeft: "1rem",
                                                  paddingTop: "0.5rem",
                                                }}
                                              >
                                                {clu.price}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )
                                    )
                                : "No hay clubes"}
                            </div>
                          )
                      )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className={classes.bodyFederationEmpty}>Select Federation</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectFiltersAndSearch;
