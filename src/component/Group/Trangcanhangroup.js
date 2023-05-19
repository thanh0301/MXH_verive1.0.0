import { useEffect } from "react";
import { getUser2 } from "../../services/apiServices";
import { useParams } from "react-router-dom";
import { useState } from "react";
import AvatarGroup from "./AvatarGroup";
import { Button } from "react-bootstrap";


const Trangcanhangroup  = () =>{

    const [user, setuser] = useState([]);

    const params = useParams();

    const quizId = params.id;
    useEffect(() => {
        fetch();
      }, [quizId]);
      const fetch = async () => {
        let data = await getUser2(quizId);
        if (data && data.EC === 0) {
          console.log("get aaaaa", data)
          setuser(data.content);
        }
      };
    return(

        <div>
        <div className="container User ">
          <div>
            <AvatarGroup user={user} />
           
            <div>
              <div className="bt-bg">
                <Button variant="light">
                  Chỉnh sửa ảnh bìa
                </Button>
              </div>
              <div className="bt-bg1">

              </div>
            </div>
          </div>
        </div>

        </div>

    )
}

export default  Trangcanhangroup 
