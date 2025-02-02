import { useNavigate } from "react-router-dom";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Submit, SesionData } from "./submit";

function Handle(
  email: string,
  password: string,
  setEmail: Dispatch<SetStateAction<string>>,
  setPassword: Dispatch<SetStateAction<string>>
) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const shipment: SesionData | null = await Submit(
      event,
      email,
      password,
      setEmail,
      setPassword
    );

    if (shipment) {
      localStorage.setItem("ID_TOKEN", shipment.idToken);
      localStorage.setItem("ACCESS_TOKEN", shipment.accessToken);
      localStorage.setItem("REFRESH_TOKEN", shipment.refreshToken);

      setTimeout(() => {
        navigate("/authguard");
      }, 2000);
    }

    setIsLoading(false);
  };

  return { handleSubmit, isLoading };
}

export default Handle;
