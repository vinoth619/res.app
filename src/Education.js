import { useEffect, useState } from "react";

function Education(props) {
  const { myEdu, educational } = props;
  const initialValue = {
    collegeName: "",
    course: "",
    year: "",
  };
  const [pb, setpb] = useState(false);
  const [Edu, setedu] = useState([initialValue]);

  const generate = () => {
    setedu((prev) => [...prev, initialValue]);
  };

  const handlechange = (event, index, keyValue) => {
    const { name, value } = event.target;
    setedu((predata) => {
      let newData = JSON.parse(JSON.stringify(predata));
      newData[index][keyValue] = value;
      return newData;
    });
  };

  useEffect(() => {
    myEdu(Edu);
  }, [Edu]);

  // ..............................
  const open = (event) => {
    event.preventDefault();
    if (pb == false) {
      setpb(true);
      document.getElementById("openbutto").innerText = "close";
    }
    if (pb == true) {
      setpb(false);
      document.getElementById("openbutto").innerText = "open";
    }
  };
  //....................................


  return (
    <>
      <div id="edu-area" className="june">
        <div className="but-area">
          <h3>Education</h3>
          <button id="openbutto" onClick={open}>
            open
          </button>
        </div>

        <div id="edu-fr">
          {pb == true
            ? educational.map((e, i) => {
                return (
                  <div key={i} className="roll">
                    <label>
                      institution{i + 1}:<br />
                      <input
                        type="text"
                        className="insitute1"
                        value={educational[i].collegeName ?educational[i].collegeName : ""}
                        onChange={(e) => handlechange(e, i, "collegeName")}
                      ></input>
                    </label>
                    <br />
                    <label>
                      course{i + 1}:<br />
                      <input
                        type="text"
                        value={educational[i].course || ""}
                        onChange={(e) => handlechange(e, i, "course")}
                      ></input>
                    </label>
                    <br />
                    <label>
                      passout:
                      <br />
                      <input
                        type="date"
                        className="year1"
                        value={educational[i].year || ""}
                        onChange={(e) => handlechange(e, i, "year")}
                      ></input>
                    </label>
                    <br />
                  </div>
                );
              })
            : null}
        </div>
        {pb == true ? (
          <button id="addmore" onClick={generate}>
            ADDMORE
          </button>
        ) : null}
      </div>
    </>
  );
}
export default Education;
