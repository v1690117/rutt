package com.v1690117.rutt.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class StaticController {
    @GetMapping("/projects")
    public RedirectView getProjectsPage(RedirectAttributes attributes) {
        return defaultRedirect(attributes);
    }

    @GetMapping("/help")
    public RedirectView redirectWithUsingRedirectView(RedirectAttributes attributes) {
        return defaultRedirect(attributes);
    }

    @GetMapping("/about")
    public RedirectView getAboutPage(RedirectAttributes attributes) {
        return defaultRedirect(attributes);
    }

    @GetMapping("/login")
    public RedirectView getLoginPage(RedirectAttributes attributes) {
        return defaultRedirect(attributes);
    }

    @GetMapping("/functional-specifications")
    public RedirectView getFunctionalSpecificationsPage(RedirectAttributes attributes) {
        return directRedirect(attributes, "functional-specifications");
    }

    @GetMapping("/business-processes")
    public RedirectView getBusinessProcesssesPage(RedirectAttributes attributes) {
        return defaultRedirect(attributes);
    }

    @GetMapping("/bp-fs-matrices")
    public RedirectView getBPFSMatricesPage(RedirectAttributes attributes) {
        return defaultRedirect(attributes);
    }

    @GetMapping("/test-plans")
    public RedirectView getTestPlansPage(RedirectAttributes attributes) {
        return defaultRedirect(attributes);
    }

    @GetMapping("/requirement-specifications")
    public RedirectView getRequirementSpecificationsPage(RedirectAttributes attributes) {
        return directRedirect(attributes, "requirement-specifications");
    }

    @GetMapping("/settings")
    public RedirectView getSettingsPage(RedirectAttributes attributes) {
        return defaultRedirect(attributes);
    }

    private RedirectView defaultRedirect(RedirectAttributes attributes) {
        attributes.addFlashAttribute("flashAttribute", "redirectWithRedirectView");
        return new RedirectView("");
    }

    private RedirectView directRedirect(RedirectAttributes attributes, String anchor) {
        attributes.addFlashAttribute("flashAttribute", "redirectWithRedirectView");
        return new RedirectView(
                String.format("#%s", anchor)
        );
    }
}
