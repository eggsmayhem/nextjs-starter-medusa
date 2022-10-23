import React, { useState, MouseEvent } from 'react'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com'
import { send } from 'emailjs-com'

const CommissionsForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm({
        defaultValues: { yes_i_understand: false }
      });
      const sendEmail = (formData: Record<string, unknown> | undefined) => {
        emailjs
          .send("service_6bttucj", "template_3mlvewo", formData, "gGOQLXH-ViY3jmho0")
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        reset();
      };

    return (
        <div>
      <h1 className="text-center text-md-left mb-3">Get in Touch / Request a Commission</h1>
      <form className="contact-form" onSubmit={handleSubmit(sendEmail)}>
        <div className="form-group mb-0 py-3">
          <textarea
            className="form-control custom--fields-mod text-the-primary"
            id="message"
            rows={3}
            placeholder="Message *"
            name="message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <div style={{ color: "red" }} className="invalid-feedback d-block">
              Please fill out this field.
            </div>
          )}
        </div>
        <div className="form-group row py-2 mb-0">
          <div className="col-md-6">
            <div>
              <div className="d-flex align-items-center">
                <input
                  className="mr-2"
                  type="checkbox"
                  id="yes_i_understand"
                  name="yes_i_understand"
                  {...register("yes_i_understand", { required: true })}
                />
                <label className="font-size-12 mb-0" htmlFor="yes_i_understand">
                  I understand and agree to the Privacy Policy and Terms and
                  Conditions.
                </label>
              </div>
              {errors.yes_i_understand && (
                <div
                  className="invalid-feedback d-block"
                  style={{ color: "red" }}
                >
                  You must agree before submitting.
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 text-center text-md-left py-2 py-md-0">
            <input
              className="buttons-width float-md-right btn btn-dark-moderate-orange rounded-0"
              type="submit"
              value="SEND MESSAGE"
            />
          </div>
        </div>
      </form>
    </div>
    );
}

export default CommissionsForm