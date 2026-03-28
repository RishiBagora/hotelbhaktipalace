import { useEffect, useState } from "react";

const useRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cached = localStorage.getItem("rooms");

    if (cached) {
      setRooms(JSON.parse(cached));
      setLoading(false);
    }

    fetch("https://script.googleusercontent.com/macros/echo?user_content_key=AWDtjMWG-i1ygiTytOBqx0PccXSDGtYT5rEcx5L-6hjwGyyPg_2E236IZXRt5lLi7BUT2n0sw4-y0gHkPRE_RwsOkVAmsiWdMuorBNyeUF_49Xluk1UebaNevh_7xPxG848d83IlzAJLWrTfE_-CoNy08pVa7WdLTyHIu0yFgkrdRqt8EBbtcjWDYt_GjlvfMOTE9thflaoyZZVE9A8CSwA9x9c0M50--SCV5egIDM53RwcH1Ec3SMaeskhQihLulq78tCExb8p87_ct5yNXgZGdhiZIqHX_CQ&lib=MfLJdlHum0FAVHuL6eM6y3QA6AJu5-yHf") // 👈 yaha apna URL daal
      .then(res => res.json())
      .then(data => {
        setRooms(data);
        localStorage.setItem("rooms", JSON.stringify(data));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load rooms");
        setLoading(false);
      });
  }, []);

  return { rooms, loading, error };
};

export default useRooms;