import { Wrapper } from "./styled";

type InputBoxProps = {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
};

const InputBox: React.FC<InputBoxProps> = ({
    type,
    name,
    placeholder,
    value,
    setValue,
}) => {
    return (
        <Wrapper>
            <span>{name}</span>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                }
            ></input>
        </Wrapper>
    );
};

export default InputBox;
