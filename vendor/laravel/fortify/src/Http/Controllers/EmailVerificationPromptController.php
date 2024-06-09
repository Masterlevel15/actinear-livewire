<?php

namespace Laravel\Fortify\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Laravel\Fortify\Contracts\VerifyEmailViewResponse;
use Laravel\Fortify\Fortify;

class EmailVerificationPromptController extends Controller
{
    /**
     * Display the email verification prompt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Laravel\Fortify\Contracts\VerifyEmailViewResponse
     */
    public function __invoke(Request $request)
    {
        /*4/05/2024
        return $request->user()->hasVerifiedEmail()
                    ? redirect()->route('homepage')
                    : app(VerifyEmailViewResponse::class);
         */
        return $request->user()->hasVerifiedEmail()
                    ? redirect()->intended(Fortify::redirects('email-verification'))
                    : app(VerifyEmailViewResponse::class);
       
    }
}
