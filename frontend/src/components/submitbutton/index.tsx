import React, { useState } from "react";
import { Button } from "./styled";

type SubmitButtonProps = {
    name: string;
    submit?: () => void;
};

export const SubmitButton: React.FC<SubmitButtonProps> = ({ name }) => {
    return <Button type="submit">{name}</Button>;
};
