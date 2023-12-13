import React, { useState } from "react";

import { Container, InputForm, LoginLink, PageName } from "./styled";

import { Wrapper } from "@components";
import InputBox from "@components/inputbox";
import { SubmitButton } from "@components/submitbutton";

import { useRouter } from "next/router";

const Login: React.FC = () => {
    const router = useRouter();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [pw, setPw] = useState<string>("");

    return (
        <Wrapper>
            <Container>
                <InputForm>
                    <PageName>로그인</PageName>

                    <InputBox
                        name={"이메일"}
                        placeholder="이메일을 입력하세요"
                        type={"email"}
                        value={email}
                        setValue={setEmail}
                    />

                    <InputBox
                        name={"비밀번호"}
                        placeholder="비밀번호를 입력하세요"
                        type={"password"}
                        value={pw}
                        setValue={setPw}
                    />

                    <SubmitButton name={"로그인"} />

                    <LoginLink>
                        계정이 없으신가요?{" "}
                        <span onClick={() => router.push("/login")}>
                            회원가입
                        </span>
                    </LoginLink>
                </InputForm>
            </Container>
        </Wrapper>
    );
};
export default Login;
