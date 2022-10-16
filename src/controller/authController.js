import connection from "../db";

// 로그인 컨트롤러
export const userSignIn = async (req, res) => {
  const { id, password } = req.body;

  try {
    await connection.query(
      `SELECT * FROM user WHERE id="${id}"`,
      (err, result) => {
        if (!result[0].user_password === password) {
          return res.status(400).json({
            status: 400,
            message: "비밀번호가 다릅니다",
          });
        }
        return res.status(200).json({
          status: 200,
          data: {
            id: id,
            password: password,
          },
        });
      }
    );
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류입니다",
    });
  }
};

// 회원가입 컨트롤러
export const userSignUp = async (req, res) => {
  const { id, password } = req.body;

  try {
    if (id === undefined) {
      return res.status(400).json({
        status: 400,
        message: "이름을 입력해주세요",
      });
    }

    await connection.query(
      `SELECT * FROM user WHERE id="${id}"`,
      (err, result) => {
        if (!result.length == 0) {
          return res.status(400).json({
            status: 400,
            message: "존재하는 이름입니다",
          });
        } else {
          connection.query(
            `INSERT INTO user(id, password) VALUES("${id}", "${password}")`,
            (err, result) => {
              console.log("✅ SignUp Ok");
              return res.status(201).json({
                status: 201,
              });
            }
          );
        }
      }
    );
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "서버 오류입니다",
    });
  }
};
