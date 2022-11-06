import React from 'react';

export default function ContactCard({name, job, email}) {
    return (
        <div className="contact-card" style={{ maxWidth: "420px" }}>
            <ul>
                <li className="contact-card">
                    <h2>{name}</h2>
                    <dl>
                        <dt>Job</dt>
                        <dd>{job}</dd>
                    </dl>
                    <dl>
                        <dt>Email</dt>
                        <dd>{email}</dd>
                    </dl>
                </li>
            </ul>
        </div>
    );
}