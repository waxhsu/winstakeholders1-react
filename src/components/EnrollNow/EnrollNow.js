import "./EnrollNow.css";
import NextCohortStarts from "../NextCohortStarts/NextCohortStarts.js";

function EnrollNow() {
    return (
        <div id="EnrollNow" className="bg-black py-2">
            {/* <NextCohortStarts /> */}
            <div className="ctaEnroll container-cc text-center">
                <h2 className="attention-voice text-white">
                    Did you know that you already have immense power? Let’s
                    uncover & focus it — together.
                </h2>
                <a className="btn btn-customPink" href="#PurchasePlans">
                    Enroll Now
                </a>
            </div>
        </div>
    );
}

export default EnrollNow;
