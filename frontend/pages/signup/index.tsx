import React, { useState } from "react";

import { Container, InputForm, LoginLink, PageName } from "./styled";

import { Wrapper } from "@components";
import InputBox from "@components/inputbox";
import { SubmitButton } from "@components/submitbutton";

import { useRouter } from "next/router";
const Signup: React.FC = () => {
    const router = useRouter();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [pw, setPw] = useState<string>("");

    return (
        <Wrapper>
            <Container>
                <InputForm>
                    <PageName>회원가입</PageName>

                    <InputBox
                        name={"이름"}
                        placeholder="이름을 입력하세요"
                        type={"text"}
                        value={name}
                        setValue={setName}
                    />

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

                    <SubmitButton name={"회원가입"} />

                    <LoginLink>
                        이미 계정이 있으신가요?{" "}
                        <span onClick={() => router.push("/login")}>
                            로그인
                        </span>
                    </LoginLink>
                </InputForm>
            </Container>
        </Wrapper>
    );
};
export default Signup;
