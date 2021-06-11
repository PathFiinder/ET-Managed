import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeActiveNavigationItemById } from 'src/app/services/stores/actions/system-data.actions';
import { selectNavigationList, selectCurrentUser, selectIsMenuExpanded, selectAvatarList } from 'src/app/services/stores/selectors/system-data.selector';
import { AvatarItem, LoggedUser, NavigationItem } from 'src/app/services/stores/types/systemData.model';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.sass']
})

export class NavigationPanelComponent implements OnInit{

  listItems: Observable<NavigationItem[]> = this.store.select(selectNavigationList)
  userInfo: Observable<LoggedUser> = this.store.select(selectCurrentUser);

  isExpanded: Observable<boolean> = this.store.select(selectIsMenuExpanded)
  avatar: Observable<AvatarItem[]> = this.store.select(selectAvatarList)
  navigationItemIdActice: number = 0;

  constructor(private store: Store) { 
  }

  ngOnInit(): void {
  }

  public getAvatarItemById(avatarList: AvatarItem[], avatar_id: number): string {
    const avatarItem: AvatarItem=  avatarList?.find((item) => item?.avatarId === avatar_id);
    return avatarItem?.imgSource;
  }

  public onButtonClick(event: Event): void {
    this.store.dispatch(changeActiveNavigationItemById({itemId: Number((event.target as Element).id.slice(-1))}))
  }
}
