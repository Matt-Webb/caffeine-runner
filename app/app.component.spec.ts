import {
    it,
    expect,
    beforeEachProviders,
    inject,
    async,
    describe,
} from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { LoggerService } from './blocks/logger.service';

@Component({
    selector: 'as-test',
    template: '<div><as-main-app></as-main-app></div>',
    directives: [AppComponent]
})
class TestComponent {
}

describe('AppComponent', () => {
    beforeEachProviders(() => [
        LoggerService,
        ROUTER_FAKE_PROVIDERS
    ]);
});
