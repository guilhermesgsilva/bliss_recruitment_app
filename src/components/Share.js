import { useState } from "react";
import axios from "axios";

import styled from "styled-components";

const Form = styled.form`
    {
    }

`;

function Share() {
    const [email, setEmail] = useState("")

    const handleForm = async (e) => {
        e.preventDefault();
        await axios.post("https://private-64010-blissrecruitmentapi.apiary-mock.com/share?destination_email={email}&content_url={props.url}");
        setEmail("");
    };

    return (
        <Form onSubmit={handleForm}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <button type="submit">Share Common Sense</button>
        </Form>
    );
};

export default Share;