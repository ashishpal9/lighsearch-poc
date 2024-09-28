"use client";
import { login } from "@/store/actions/authAction";
import { useAppDispatch } from "@/store/hooks";
import { redirect } from "next/navigation";
import Image from "next/image";
import brandDark from "../../../assets/images/thumbnails/brand-dark.png";

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: FormData) => {
    const res = await dispatch(login(e));
    if (res?.success) redirect("/")
  }
  return (
    <>
      <div className="auth_wrapper">
        <div className="signup_left_wrap">
          <article className="main_article">
            <h1>
              Welcome to Our<br/> Clinical Analysis Platform
            </h1>
            <p> Log in to access our advanced clinical analysis tools designed to enhance accuracy, flag acute anomalies, and expedite patient triage. Our platform, built on robust Python-based algorithms, streamlines the diagnostic process to support healthcare professionals in delivering timely and precise care. Please enter your credentials to continue.</p>
          </article>
        </div>
        <div className="signup_right_wrap">
          <div className="card_outer_shadow_wrap">

          </div>
          <div className="form_card_wrap">
            <form action={handleSubmit} className="">
              <a href="#" className="logo_img_wrap">
                <Image src={brandDark} alt="user_avtar" />
              </a>
              <fieldset>
                <div className="input_grp">
                  <label className="label_modify" htmlFor="username"> Email </label>
                  <input className="input_modify" id="username" type="email" placeholder="Enter your email" name="username" />
                </div>
                <div className="input_grp mb-0">
                  <label className="label_modify" htmlFor="password"> Password </label>
                  <input className="input_modify" id="password" type="password" placeholder="Password" name="password" />
                </div>
                <a href="#" className="site_link">
                  Forgot Password?
                </a>
              </fieldset>
              <div className="btn-wrapper">
                <button type="submit" className="theme-btn theme-dark w-100">Login </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default LoginPage;